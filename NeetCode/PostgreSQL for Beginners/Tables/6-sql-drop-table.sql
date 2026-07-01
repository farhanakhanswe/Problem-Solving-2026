/*
    Link: https://neetcode.io/problems/sql-drop-table/question

    You can use the DROP TABLE statement to remove a table from a database.

    When a table is dropped, all the data in the table is deleted, and the table itself is removed 
    from the database.

    Challenge:

    You are given a table called unused_table. Your task is to drop this table from the database.

*/

CREATE TABLE unused_table (
  id INTEGER,
  name TEXT
);

DROP TABLE unused_table;