# Link: https://leetcode.com/problems/patients-with-a-condition/submissions/2086512714/?envType=study-plan-v2&envId=top-sql-50

SELECT patient_id, patient_name, conditions
FROM Patients
WHERE conditions LIKE 'DIAB1%'
    OR conditions LIKE '% DIAB1%';