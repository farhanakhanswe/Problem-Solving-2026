/*
    Link: https://neetcode.io/problems/sql-default-values/question

    Table columns can have default values. When inserting rows into a table it's possible to omit values for 
    some columns. The database will automatically insert NULL for those columns, unless a default value is specified.
    You can specify a default value for a column when creating a table.

    CREATE TABLE users (
        name TEXT DEFAULT 'Anonymous',
        email TEXT,
        age INTEGER DEFAULT 18
    );

    In the above example, the name column has a default value of 'Anonymous', and the age column
    has a default value of 18. The email column does not have a default value, so it will be NULL
    if no value is provided.

    You can specify a default value by using the DEFAULT keyword followed by the value you want to set.

    Challenge:

    Create a table called videos with the following columns:

    id of type INTEGER with no default value
    name of type TEXT with a default value of 'Untitled'
    is_published of type BOOLEAN with a default value of false
    
*/

CREATE TABLE videos(
    id INTEGER,
    name TEXT DEFAULT 'Untitled',
    is_published Boolean DEFAULT False
);
