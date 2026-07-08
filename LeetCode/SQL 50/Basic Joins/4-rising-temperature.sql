# Link: https://leetcode.com/problems/rising-temperature/submissions/2059524599/?envType=study-plan-v2&envId=top-sql-50

/* 
    Solution 1: Without a strict ON condition, INNER JOIN creates a Cartesian Product (every single row in the 
    first table attempts to pair up with every single row in the second table); so it behaves like CROSS JOIN. 
*/

SELECT today.id
FROM Weather AS yesterday
INNER JOIN Weather AS today
WHERE today.temperature > yesterday.temperature
AND DATEDIFF(today.recordDate, yesterday.recordDate) = 1;

/*
     Solution 2: Use ON to match the rows
*/

SELECT today.id
FROM Weather AS yesterday
INNER JOIN Weather AS today
ON DATEDIFF(today.recordDate, yesterday.recordDate) = 1
WHERE today.temperature > yesterday.temperature;