/* 
    Link: https://neetcode.io/problems/sql-capitalization/question
    
    In SQL, keywords are not case-sensitive. This means that you can
    write SQL keywords in uppercase, lowercase, or a mix of both. 

    Generally, SQL keywords are written in uppercase, and table and column names are 
    written in lowercase. 

    Challenge:

    The SQL statement below is currently broken. It's missing a few keywords.
    Fix it so that it creates the table users with a column called name of type TEXT.

    TABLE users (
    name
    );

*/

CREATE TABLE users (
    name TEXT
);
