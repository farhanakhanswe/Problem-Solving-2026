/* 
    Link: https://neetcode.io/problems/sql-create-table/question
    
    Relational databases store data in tables. A table consists of rows and columns.

    CREATE TABLE users (
        name TEXT,
        age INTEGER,
        join_date DATE
    );  
    
    In the example above, we created a table called users with three columns.

    The name column is of type TEXT
    The age column is of type INTEGER
    The join_date column is of type DATE
    This is the schema of the table. It's analogous to a class definition in object-oriented programming.
    
    Create a table called videos with the following columns:

    id of type INTEGER
    name of type TEXT
    created_at of type DATE
    published of type BOOLEAN

*/

CREATE TABLE videos(
    id INTEGER,
    name TEXT,
    created_at DATE,
    published BOOLEAN
);

