# Link: https://leetcode.com/problems/the-number-of-employees-which-report-to-each-employee/submissions/2074919686/?envType=study-plan-v2&envId=top-sql-50

SELECT 
    manager.employee_id AS employee_id,
    manager.name AS name,
    COUNT(*) AS reports_count,
    ROUND( AVG(employee.age) ) AS average_age
FROM Employees AS employee
JOIN Employees AS manager
ON employee.reports_to = manager.employee_id
GROUP BY manager.employee_id
ORDER BY manager.employee_id;