# Link: https://leetcode.com/problems/project-employees-i/submissions/2063250018/?envType=study-plan-v2&envId=top-sql-50

SELECT 
    project_id, 
    ROUND( AVG ( e.experience_years ), 2) AS average_years
FROM Project AS p
JOIN Employee AS e
ON p.employee_id = e.employee_id
GROUP BY p.project_id;