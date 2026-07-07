# Link: https://leetcode.com/problems/article-views-i/submissions/2058365421/?envType=study-plan-v2&envId=top-sql-50

SELECT DISTINCT author_id AS id
FROM Views
WHERE author_id = viewer_id
ORDER BY id ASC;
