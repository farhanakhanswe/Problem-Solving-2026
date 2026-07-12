# Link: https://leetcode.com/problems/immediate-food-delivery-ii/?envType=study-plan-v2&envId=top-sql-50

SELECT ROUND( SUM( IF(order_date = customer_pref_delivery_date, 1, 0) ) * 100 / COUNT(*) , 2) AS immediate_percentage 
FROM Delivery AS d1
JOIN (
    SELECT 
        MIN(order_date) AS oldest_order_date,
        customer_id
    FROM Delivery
    GROUP BY customer_id
    ) AS d2
ON d1.customer_id = d2.customer_id
AND d1.order_date = d2.oldest_order_date