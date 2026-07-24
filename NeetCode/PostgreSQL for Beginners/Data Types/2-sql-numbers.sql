-- Link: https://neetcode.io/problems/sql-numbers/question

CREATE TABLE bank_accounts(
  id BIGINT PRIMARY KEY,
  balance NUMERIC(20,2),
  interest_rate NUMERIC(5,2),
  number_of_owners SMALLINT
);