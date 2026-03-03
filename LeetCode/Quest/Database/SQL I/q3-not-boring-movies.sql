# Link: https://leetcode.com/problems/not-boring-movies/?envType=problem-list-v2&envId=db-db1-sql-i

SELECT *
FROM Cinema
WHERE id % 2 != 0
AND description != "boring"
ORDER BY rating DESC;
