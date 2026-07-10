# Link: https://leetcode.com/problems/not-boring-movies/?envType=study-plan-v2&envId=top-sql-50

SELECT *
FROM Cinema
WHERE id%2 <> 0
AND description <> 'boring'
ORDER BY rating DESC;