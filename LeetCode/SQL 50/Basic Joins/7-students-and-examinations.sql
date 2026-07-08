# Link: https://leetcode.com/problems/students-and-examinations/?envType=study-plan-v2&envId=top-sql-50

SELECT
    st.student_id,
    st.student_name,
    su.subject_name,
    COUNT(e.subject_name) AS attended_exams
FROM Students AS st
CROSS JOIN Subjects AS su
LEFT JOIN Examinations AS e
ON st.student_id = e.student_id
AND su.subject_name = e.subject_name
GROUP BY st.student_id, st.student_name, su.subject_name
ORDER BY st.student_id, st.student_name;