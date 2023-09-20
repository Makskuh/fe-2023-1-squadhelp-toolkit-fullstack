CREATE TABLE messages (
  id SERIAL PRIMARY KEY,
  body TEXT,
  sender INT REFERENCES "Users"
)
ALTER TABLE messages
ADD COLUMN "dialogue" INT REFERENCES "conversation",
ADD COLUMN created_at TIMESTAMP NOT NULL DEFAULT current_timestamp,
ADD COLUMN updated_at TIMESTAMP NOT NULL DEFAULT current_timestamp;

CREATE TABLE "conversation" (
  id SERIAL PRIMARY KEY,
  participants NUMBER NOT NULL ,
  blacklist
)





SELECT  * FROM messages