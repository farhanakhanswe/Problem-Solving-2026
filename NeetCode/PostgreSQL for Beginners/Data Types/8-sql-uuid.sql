-- Link: https://neetcode.io/problems/sql-uuid/question

CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT
);
