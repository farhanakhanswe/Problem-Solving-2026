# Link: https://leetcode.com/problems/replace-employee-id-with-the-unique-identifier/?envType=study-plan-v2&envId=top-sql-50

SELECT unique_id, name
FROM Employees AS e
LEFT JOIN EmployeeUNI AS eu
ON e.id = eu.id;