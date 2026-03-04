/*
  # Drop members and sessions tables

  These tables were used for local session management but are no longer needed
  since Ghost handles all authentication directly.

  1. Tables Removed
    - `sessions` - Was used to store local session tokens
    - `members` - Was used to cache Ghost member data locally

  2. Notes
    - The `newsletter_subscribers` table remains intact for email collection
    - Ghost handles all member authentication and session management
*/

DROP TABLE IF EXISTS sessions;
DROP TABLE IF EXISTS members;
