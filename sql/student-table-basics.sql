CREATE TABLE Student (
    student_id INT AUTO_INCREMENT,
    name VARCHAR(20) NOT NULL,
    major VARCHAR(20),
    PRIMARY KEY(student_id)
);

-- constraints:
NOT NULL
-- has to have an entry
UNIQUE
-- has to have a unique value entry
DEFAULT 'Computer Science'
-- if no value is entered this will be entered in place
AUTO_INCREMENT
-- automatically increments the value each time an entry is added.


INSERT INTO Student VALUES(
    'Joe Smith', 'Business'
    -- ('Joe Smith', 'Business'),
);


SELECT * FROM Student;
-- select all from the Student table

DESCRIBE Student;
-- shows Student table

DROP TABLE Student;
-- removes table

ALTER TABLE Student ADD gpa DECIMAL;
-- adds a gpa column to the Student table as a decimal data type

ALTER TABLE Student DROP COLUMN gpa;
-- drops the gpa column in the Student table



UPDATE Student
SET major = 'Bio'
WHERE major = 'Biology';
-- updates Student table where student's major is Biology

UPDATE Student
SET name = 'Tom', major = 'undecided'
WHERE student_id = 1;
-- where student_id = 1, set the name to Tom and major to undecided

-- // removing 'WHERE' will impact the whole table
DELETE FROM Student
WHERE name = 'Tom' AND major = 'undecided';
-- only delete entry where the name is TOM and the major is undecided


SELECT Student.name, Student.major
FROM student
ORDER BY name DESC;
-- return name and major columns of the Student table ordered in decending order

SELECT *
FROM Student
ORDER BY major, student_id;
-- selects all from the Student table and orders by their major first
-- if there are two with the same major it will then order by student_id

SELECT *
FROM Student 
LIMIT 2;
-- only returns the first two rows of the Student table

SELECT *
FROM Student
WHERE major = 'Biology' OR major = 'Chemistry';


WHERE
-- <, >, <=, =>, =, <>, AND, OR


SELECT name, major
FROM Student
WHERE major <> 'Chemistry';
-- selects the name and major columns from the Student table where 
-- the mamjor is not Chemistry


SELECT *
FROM Student
WHERE name IN ('Clair', 'Kate');
-- returns the rows from the Student table where the name is Clair 
-- and Kate