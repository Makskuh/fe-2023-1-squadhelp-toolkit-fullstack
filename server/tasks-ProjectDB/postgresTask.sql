CREATE TABLE messages (
  id SERIAL PRIMARY KEY,
  body TEXT,
  sender INT REFERENCES "Users"(id),
  "conversation_id" INT REFERENCES "conversation"(id),
  created_at TIMESTAMP NOT NULL DEFAULT current_timestamp,
  updated_at TIMESTAMP NOT NULL DEFAULT current_timestamp
)


CREATE TABLE "conversation" (
  id SERIAL PRIMARY KEY,
  participants INT[] NOT NULL,
  blacklist BOOLEAN[] NOT NULL,
  favoritelist BOOLEAN[]  NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT current_timestamp,
  updated_at TIMESTAMP NOT NULL DEFAULT current_timestamp
)

CREATE TABLE "Catalog" (
  id SERIAL PRIMARY KEY,
  "catalogName" TEXT,
  "userId" INT REFERENCES "Users"(id),
  "conversation_id" INT REFERENCES "conversation"(id)
)

SELECT  * FROM messages