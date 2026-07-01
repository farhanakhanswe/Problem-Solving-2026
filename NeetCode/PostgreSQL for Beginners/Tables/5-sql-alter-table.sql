/*
    Link: https://neetcode.io/problems/sql-alter-table/question
    
    You can use the ALTER TABLE statement to add, modify, or drop columns in an existing table.

    Challenge: 

    You are given a table called books with the following columns:

    id of type INTEGER
    title of type TEXT
    author of type TEXT
    Your task is to:

    Add a new column called published_year of type INTEGER to the table
    Modify the id column to be called isbn instead
    Drop the author column from the table
    
*/

CREATE TABLE books (
  id INTEGER,
  title TEXT,
  author TEXT
);

ALTER TABLE books
ADD COLUMN published_year INTEGER;

ALTER TABLE books
RENAME COLUMN id TO isbn;

ALTER TABLE books
DROP COLUMN author;