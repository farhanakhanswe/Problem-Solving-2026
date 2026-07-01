/*
    Link: https://neetcode.io/problems/sql-table-rows/question
    
    By default, columns of a table are ordered the same as the order in the CREATE TABLE statement.

    Challenge:
    Create a table called cities with the following columns:

    name of type TEXT
    population of type INTEGER
    country of type TEXT
    is_capital of type BOOLEAN
    founded_date of type DATE

*/

CREATE TABLE cities(
    name TEXT,
    population INTEGER,
    country TEXT,
    is_capital BOOLEAN,
    founded_date DATE
);
