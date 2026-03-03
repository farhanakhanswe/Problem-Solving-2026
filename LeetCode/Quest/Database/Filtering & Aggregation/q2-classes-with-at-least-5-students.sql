# Link: https://leetcode.com/problems/classes-with-at-least-5-students/?envType=problem-list-v2&envId=db-db2-filtering-aggregation

SELECT class
FROM Courses
GROUP BY class    
HAVING COUNT(student) >= 5;