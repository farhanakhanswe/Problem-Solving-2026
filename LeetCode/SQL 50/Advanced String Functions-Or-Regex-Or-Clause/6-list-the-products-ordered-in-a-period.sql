# Link: https://leetcode.com/problems/list-the-products-ordered-in-a-period/submissions/2093038160/?envType=study-plan-v2&envId=top-sql-50

SELECT 
    p.product_name AS product_name, 
    SUM(o.unit) AS unit 
FROM Products p
JOIN Orders o 
USING (product_id)
WHERE YEAR(o.order_date)='2020' AND MONTH(o.order_date)='02'
GROUP BY p.product_id
HAVING SUM(o.unit)>=100