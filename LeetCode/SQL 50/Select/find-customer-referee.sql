# Link: https://leetcode.com/problems/find-customer-referee/submissions/2058347358/?envType=study-plan-v2&envId=top-sql-50

SELECT name
FROM Customer
WHERE referee_id != 2
OR referee_id IS NULL;