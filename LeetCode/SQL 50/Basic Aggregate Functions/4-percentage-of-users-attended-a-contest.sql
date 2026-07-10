# Link: https://leetcode.com/problems/percentage-of-users-attended-a-contest/submissions/2063272191/?envType=study-plan-v2&envId=top-sql-50

SELECT 
    r.contest_id,
    ROUND(
        COUNT(r.user_id) * 100 /
        (SELECT COUNT(*) FROM Users)
    , 2) AS percentage
FROM Users AS u
JOIN Register AS r
ON u.user_id = r.user_id
GROUP BY r.contest_id
ORDER BY percentage DESC, r.contest_id ASC;