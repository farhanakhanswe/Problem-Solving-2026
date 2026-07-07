# https://leetcode.com/problems/invalid-tweets/submissions/2058371059/?envType=study-plan-v2&envId=top-sql-50

SELECT tweet_id 
FROM Tweets
WHERE LENGTH(content) > 15;