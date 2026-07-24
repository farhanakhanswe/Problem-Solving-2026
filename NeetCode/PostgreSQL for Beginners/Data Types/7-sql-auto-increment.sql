-- Link: https://neetcode.io/problems/sql-auto-increment/question

CREATE SEQUENCE gov_id START WITH 1000 INCREMENT BY 3;

CREATE TABLE gov_employee (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    gov_id INTEGER DEFAULT nextval('gov_id'),
    name TEXT
);