# Link: https://leetcode.com/problems/employees-earning-more-than-their-managers/description/?envType=problem-list-v2&envId=db-db1-sql-i

SELECT employees.name AS "Employee"
FROM Employee AS employees
LEFT JOIN Employee AS managers
ON employees.managerId = managers.id  # because manager is also an employee
WHERE employees.salary > managers.salary;
