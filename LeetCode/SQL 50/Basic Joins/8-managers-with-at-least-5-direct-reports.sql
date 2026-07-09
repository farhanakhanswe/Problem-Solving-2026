# Link: https://leetcode.com/problems/managers-with-at-least-5-direct-reports/?envType=study-plan-v2&envId=top-sql-50

/* Solution 1: Using subqueries */

SELECT e1.name
FROM Employee AS e1
WHERE e1.id IN (
    SELECT managerId
    FROM Employee AS e2
    WHERE e2.managerId IS NOT NULL
    GROUP BY managerId
    HAVING COUNT(*) >= 5
);

/* Solution 2: Using Self Join */

SELECT e1.name
FROM Employee AS e1
JOIN Employee AS e2
ON e1.id = e2.managerId
GROUP BY e1.id, e1.name
HAVING COUNT(*) >= 5;