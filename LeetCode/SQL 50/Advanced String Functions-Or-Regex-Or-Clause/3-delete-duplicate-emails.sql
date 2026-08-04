# Link: https://leetcode.com/problems/delete-duplicate-emails/submissions/2087877188/?envType=study-plan-v2&envId=top-sql-50

DELETE p1
FROM person p1
CROSS JOIN person p2
ON p1.email = p2.email
WHERE p1.id > p2.id;