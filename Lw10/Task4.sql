USE
    LW10;
SELECT
    full_name AS 'Student name',
    age AS 'Age',
    group_name AS 'Group',
    faculty_name AS 'Faculty'
FROM
    students
JOIN
    groups ON students.group_id = groups.id
JOIN
    faculty ON groups.faculty_id = faculty.id
WHERE
    full_name = 'Killian Anderson';