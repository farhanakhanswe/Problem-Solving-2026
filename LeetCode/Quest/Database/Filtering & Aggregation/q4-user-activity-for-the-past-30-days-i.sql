# Link: https://leetcode.com/problems/user-activity-for-the-past-30-days-i/?envType=problem-list-v2&envId=db-db2-filtering-aggregation

SELECT 
activity_date AS day, 
COUNT(DISTINCT user_id) AS active_users 
FROM Activity
WHERE activity_date BETWEEN DATE_SUB('2019-07-27', INTERVAL 29 DAY) AND '2019-07-27' -- interval 29 day as we need to include the ending date
GROUP BY activity_date;
