USE
    LW10;
SELECT
    full_name AS 'Student name',
    age AS 'Age',
    group_name AS 'Group'
FROM
    students
JOIN
    groups ON students.group_id = groups.id
WHERE
    group_name = 'PS';