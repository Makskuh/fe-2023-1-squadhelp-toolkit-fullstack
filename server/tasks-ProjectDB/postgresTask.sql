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
  participants INT [] NOT NULL,
  blacklist BOOLEAN [] NOT NULL,
  favoritelist BOOLEAN [] NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT current_timestamp,
  updated_at TIMESTAMP NOT NULL DEFAULT current_timestamp
) 
CREATE TABLE "Catalog" (
  id SERIAL PRIMARY KEY,
  "catalogName" TEXT,
  "userId" INT REFERENCES "Users"(id),
  "conversation_id" INT REFERENCES "conversation"(id)
)
-- ==================== TASK № 9 ==============================

SELECT count(*),role
FROM "Users"
GROUP BY role

-- ==================== TASK № 10 ==============================

UPDATE "Users" u 
SET balance = u.balance + (sum * 0.1)
FROM (
  SELECT "userId" usid,SUM(c.prize) sum
  FROM "Contests" c
  WHERE c."createdAt" >= '2022-12-25' AND c."createdAt" <= '2023-12-30'
  GROUP BY c."userId"
) AS uc
WHERE u.role = 'customer' AND u.id = uc.usid;

UPDATE "Users" SET balance= 600
WHERE role = 'customer'

SELECT * FROM "Contests"

-- ==================== TASK № 11 ==============================

UPDATE "Users" u 
SET balance = u.balance + 10
FROM (
  SELECT *
  FROM "Users" 
  WHERE role = 'creator' 
  ORDER BY rating DESC
  LIMIT 3
) AS us
WHERE us.id = u.id

UPDATE "Users" SET balance= 0
WHERE role = 'creator'

