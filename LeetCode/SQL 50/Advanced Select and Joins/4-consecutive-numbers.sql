# Link: https://leetcode.com/problems/consecutive-numbers/submissions/2098848521/?envType=study-plan-v2&envId=top-sql-50

SELECT DISTINCT l1.Num AS ConsecutiveNums
FROM Logs AS l1, Logs AS l2, Logs l3
WHERE l1.Id = l2.Id - 1
AND l2.Id = l3.Id - 1
AND l1.Num = l2.Num
AND l2.Num = l3.Num;
