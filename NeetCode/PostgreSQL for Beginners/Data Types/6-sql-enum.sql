-- Link: https://neetcode.io/problems/sql-enum/question

CREATE TYPE account_type AS ENUM ('checking', 'savings', 'cd', 'money_market');

CREATE TABLE bank_accounts(
    id INTEGER PRIMARY KEY,
    account_type account_type,
    balance INTEGER
); 
