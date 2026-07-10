# Link: https://leetcode.com/problems/average-selling-price/submissions/2062904738/?envType=study-plan-v2&envId=top-sql-50

SELECT 
    p.product_id,
    IFNULL(ROUND(SUM( p.price * us.units ) / SUM( us.units ), 2), 0)
    AS average_price
FROM Prices AS p
LEFT JOIN UnitsSold AS us
ON p.product_id = us.product_id
AND us.purchase_date BETWEEN DATE(p.start_date) AND DATE(p.end_date)
GROUP BY p.product_id;