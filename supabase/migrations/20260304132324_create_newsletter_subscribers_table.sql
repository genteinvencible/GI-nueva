/*
  # Create newsletter subscribers table

  1. New Tables
    - `newsletter_subscribers`
      - `id` (uuid, primary key)
      - `email` (text, unique) - subscriber email address
      - `subscribed_at` (timestamptz) - when they subscribed
      - `unsubscribed_at` (timestamptz, nullable) - when they unsubscribed, if ever

  2. Security
    - Enable RLS on `newsletter_subscribers` table
    - No public policies (only service role can access)
*/

CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  subscribed_at timestamptz DEFAULT now(),
  unsubscribed_at timestamptz
);

ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;
