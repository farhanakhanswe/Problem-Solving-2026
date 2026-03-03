# Link: https://leetcode.com/problems/combine-two-tables/?envType=problem-list-v2&envId=db-db1-sql-i

SELECT p.firstName, p.lastName, a.city, a.state 
FROM Person AS p
LEFT JOIN Address AS a
ON p.personId = a.personId;
