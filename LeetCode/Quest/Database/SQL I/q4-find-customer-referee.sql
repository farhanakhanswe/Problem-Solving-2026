# Link: https://leetcode.com/problems/find-customer-referee/?envType=problem-list-v2&envId=db-db1-sql-i

SELECT name
FROM Customer
WHERE referee_id IS NULL
OR referee_id != 2;