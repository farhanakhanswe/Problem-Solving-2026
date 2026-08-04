# Link: https://leetcode.com/problems/fix-names-in-a-table/?envType=study-plan-v2&envId=top-sql-50

SELECT
    u.user_id , 
    CONCAT( UPPER(SUBSTR(u.name,1,1)), LOWER(SUBSTR(u.name,2))) AS name
    FROM Users AS u
    ORDER BY u.user_id ASC;
