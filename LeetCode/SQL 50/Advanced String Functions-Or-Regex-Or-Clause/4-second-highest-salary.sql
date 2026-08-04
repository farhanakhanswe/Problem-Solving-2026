# Link: https://leetcode.com/problems/second-highest-salary/?envType=study-plan-v2&envId=top-sql-50

SELECT (
    SELECT DISTINCT salary
    FROM Employee
    ORDER BY salary DESC
    LIMIT 1 OFFSET 1
) AS SecondHighestSalary;


