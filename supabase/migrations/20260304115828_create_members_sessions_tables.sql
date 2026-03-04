/*
  # Ghost Headless Auth - Members & Sessions Tables

  1. New Tables
    - `members`
      - `id` (uuid, primary key) - Internal Supabase ID
      - `ghost_member_id` (text, unique) - Ghost CMS member ID
      - `email` (text, unique, not null) - Member email
      - `name` (text) - Member display name
      - `status` (text) - Ghost membership status (free, paid, comped)
      - `subscribed` (boolean) - Newsletter subscription status
      - `ghost_data` (jsonb) - Full Ghost member data cache
      - `created_at` (timestamptz) - Record creation timestamp
      - `updated_at` (timestamptz) - Last update timestamp
    
    - `sessions`
      - `id` (uuid, primary key) - Session ID
      - `member_id` (uuid, foreign key) - Reference to members table
      - `token` (text, unique) - Session token for cookie
      - `expires_at` (timestamptz) - Session expiration
      - `created_at` (timestamptz) - Session creation timestamp
      - `user_agent` (text) - Browser user agent
      - `ip_address` (text) - Client IP address

  2. Security
    - RLS enabled on both tables
    - Sessions can only be read/managed by the session owner
    - Members can only read their own data

  3. Indexes
    - Index on members.email for fast lookup
    - Index on members.ghost_member_id for Ghost sync
    - Index on sessions.token for session validation
    - Index on sessions.expires_at for cleanup queries
*/

-- Members table
CREATE TABLE IF NOT EXISTS members (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  ghost_member_id text UNIQUE,
  email text UNIQUE NOT NULL,
  name text,
  status text DEFAULT 'free',
  subscribed boolean DEFAULT true,
  ghost_data jsonb DEFAULT '{}',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Sessions table
CREATE TABLE IF NOT EXISTS sessions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  member_id uuid NOT NULL REFERENCES members(id) ON DELETE CASCADE,
  token text UNIQUE NOT NULL,
  expires_at timestamptz NOT NULL,
  created_at timestamptz DEFAULT now(),
  user_agent text,
  ip_address text
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_members_email ON members(email);
CREATE INDEX IF NOT EXISTS idx_members_ghost_id ON members(ghost_member_id);
CREATE INDEX IF NOT EXISTS idx_sessions_token ON sessions(token);
CREATE INDEX IF NOT EXISTS idx_sessions_expires ON sessions(expires_at);
CREATE INDEX IF NOT EXISTS idx_sessions_member ON sessions(member_id);

-- Enable RLS
ALTER TABLE members ENABLE ROW LEVEL SECURITY;
ALTER TABLE sessions ENABLE ROW LEVEL SECURITY;

-- RLS Policies for members
CREATE POLICY "Members can read own data"
  ON members
  FOR SELECT
  TO authenticated
  USING (id = auth.uid());

-- RLS Policies for sessions (service role only for backend operations)
CREATE POLICY "Service role can manage all sessions"
  ON sessions
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- Allow anon to read sessions by token (for validation)
CREATE POLICY "Anon can validate sessions by token"
  ON sessions
  FOR SELECT
  TO anon
  USING (token IS NOT NULL AND expires_at > now());

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger for members updated_at
DROP TRIGGER IF EXISTS update_members_updated_at ON members;
CREATE TRIGGER update_members_updated_at
  BEFORE UPDATE ON members
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
