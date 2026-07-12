# Link: https://leetcode.com/problems/game-play-analysis-iv/?envType=study-plan-v2&envId=top-sql-50

SELECT ROUND( COUNT(*) / ( SELECT COUNT(DISTINCT player_id) FROM Activity), 2) AS fraction 
FROM Activity AS a1
JOIN(
    SELECT DATE_ADD(MIN(event_date), INTERVAL 1 DAY) AS immediate_next_day,
    player_id
    FROM Activity
    GROUP BY player_id
    ) AS a2   
ON a1.player_id = a2.player_id
AND a1.event_date = a2.immediate_next_day;