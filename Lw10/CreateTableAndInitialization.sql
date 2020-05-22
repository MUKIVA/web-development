DROP DATABASE LW10;
CREATE DATABASE LW10;
USE LW10;

CREATE TABLE faculty
(
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    faculty_name VARCHAR(20) NOT NULL
);

INSERT INTO faculty(faculty_name) VALUES ('FIaCE'),
                                         ('RTF'),
                                         ('FE');

CREATE TABLE groups
(
    id INT(11) PRIMARY KEY AUTO_INCREMENT NOT NULL,
    group_name VARCHAR(20) NOT NULL,
    faculty_id INT(11),
    FOREIGN KEY (faculty_id) REFERENCES faculty(id)
);
  
INSERT INTO groups(group_name, faculty_id) VALUES ('PS', 1),
                                                  ('CSaCE', 1),
                                                  ('BIS', 1),
                                                  ('SUZiS', 2),
                                                  ('STR', 2),
                                                  ('ARCH', 2),
                                                  ('FM', 3),
                                                  ('UPR', 3),
                                                  ('FP', 3);


CREATE TABLE students
(
    id INT(11) AUTO_INCREMENT NOT NULL,
    full_name VARCHAR(100) NOT NULL,
    age INT(11) NOT NULL,
    group_id INT(11),
    FOREIGN KEY (group_id) REFERENCES groups(id),
    PRIMARY KEY(id)
);

INSERT INTO students(full_name, age, group_id) VALUES ('Killian Anderson', 19, 1),
                                                      ('Ximenes Garcia', 19, 1),
                                                      ('Turner Brown', 19, 1),
                                                      ('Xeno Henderson', 18, 1),
                                                      ('Keegan Allen', 19, 1),
                                                      ('Osiris Sanchez', 18, 2),
                                                      ('Roland Bennett', 20, 2),
                                                      ('Yosef Gray', 18, 2),
                                                      ('Wesley Flores', 19, 2),
                                                      ('Jaxson Bell', 20, 2),
                                                      ('Oliver Campbell', 19, 3),
                                                      ('Zain Roberts', 18, 3),
                                                      ('Nathan Powell', 19, 3),
                                                      ('Hadlee Hayes', 18, 3),
                                                      ('Omari Walker', 20, 3),
                                                      ('Archer Ross', 19, 4),
                                                      ('Phineas King', 20, 4),
                                                      ('Emerson Garcia', 19, 4),
                                                      ('Landon Cooper', 19, 4),
                                                      ('Leonard Hill', 18, 4),
                                                      ('Immanuel Griffin', 19, 5),
                                                      ('Boone Martinez', 18, 5),
                                                      ('Maximilian Wood', 19, 5),
                                                      ('DeAndre Evans', 19, 5),
                                                      ('Ulrich Smith', 18, 5),
                                                      ('Ulisses Collins', 19, 6),
                                                      ('Emanuel Long', 19, 6),
                                                      ('George Price', 18, 6),
                                                      ('Noam Hernandez', 19, 6),
                                                      ('King Roberts', 19, 6),
                                                      ('Patricio Gonzalez', 19, 7),
                                                      ('Emilio Wright', 19, 7),
                                                      ('Quentrell White', 20, 7),
                                                      ('Ulmer Adams', 18, 7),
                                                      ('Wes Thompson', 19, 7),
                                                      ('Oren Edwards', 20, 8),
                                                      ('Zander Murphy', 19, 8),
                                                      ('Bristol Simmons', 20, 8),
                                                      ('Hugh Walker', 18, 8),
                                                      ('Quillen Anderson', 19, 8),
                                                      ('Waylon Brown', 20, 9),
                                                      ('Omari Washington', 19, 9),
                                                      ('Luis Alexander', 18, 9),
                                                      ('Landyn Cook', 20, 9),
                                                      ('Vidal Campbell', 18, 9);
