/*
  # Create Members Sessions Table for Magic Link Authentication

  1. New Tables
    - `members_sessions`
      - `id` (uuid, primary key) - Unique session identifier
      - `email` (text, not null) - Member's email address
      - `token` (text, unique, not null) - Magic link verification token
      - `ghost_member_id` (text) - Ghost member ID after verification
      - `verified` (boolean) - Whether the token has been used
      - `expires_at` (timestamptz) - Token expiration time
      - `created_at` (timestamptz) - Session creation timestamp
      - `last_activity_at` (timestamptz) - Last activity timestamp
  
  2. Security
    - Enable RLS on `members_sessions` table
    - Add policy for edge functions using service role (no public access)
    
  3. Indexes
    - Index on token for fast lookup during verification
    - Index on email for session management
    - Index on expires_at for cleanup queries
*/

CREATE TABLE IF NOT EXISTS members_sessions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL,
  token text UNIQUE NOT NULL,
  ghost_member_id text,
  verified boolean DEFAULT false,
  expires_at timestamptz NOT NULL,
  created_at timestamptz DEFAULT now(),
  last_activity_at timestamptz DEFAULT now()
);

ALTER TABLE members_sessions ENABLE ROW LEVEL SECURITY;

CREATE INDEX IF NOT EXISTS idx_members_sessions_token ON members_sessions(token);
CREATE INDEX IF NOT EXISTS idx_members_sessions_email ON members_sessions(email);
CREATE INDEX IF NOT EXISTS idx_members_sessions_expires_at ON members_sessions(expires_at);
