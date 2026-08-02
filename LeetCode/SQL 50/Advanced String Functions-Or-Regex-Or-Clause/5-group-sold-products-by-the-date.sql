# Link: https://leetcode.com/problems/group-sold-products-by-the-date/submissions/2091706048/?envType=study-plan-v2&envId=top-sql-50

SELECT 
    sell_date,
    COUNT(DISTINCT(product)) AS num_sold,
    GROUP_CONCAT(DISTINCT(product) SEPARATOR ',') AS products
FROM Activities
GROUP BY sell_date
ORDER BY sell_date, product;