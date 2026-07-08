# https://leetcode.com/problems/average-time-of-process-per-machine/?envType=study-plan-v2&envId=top-sql-50

SELECT 
 a1.machine_id,
 ROUND(AVG(a2.timestamp - a1.timestamp), 3) AS 'processing_time'
FROM Activity AS a1
INNER JOIN Activity as a2
ON a1.machine_id = a2.machine_id
AND a1.process_id = a2.process_id
AND a1.activity_type = "start"
AND a2.activity_type = "end"
GROUP BY machine_id;