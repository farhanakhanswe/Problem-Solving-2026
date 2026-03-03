# Link: https://leetcode.com/problems/customer-placing-the-largest-number-of-orders/?envType=problem-list-v2&envId=db-db2-filtering-aggregation

SELECT customer_number
FROM Orders
GROUP BY customer_number
ORDER BY COUNT(order_number) DESC
LIMIT 1;