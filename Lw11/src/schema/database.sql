DROP DATABASE user_message;
CREATE DATABASE user_message;
USE user_message;
CREATE TABLE request
(
	message_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL UNIQUE,
    user_name VARCHAR(100)  NOT NULL,
    email 	  VARCHAR(300) 	NOT NULL,
    country   VARCHAR(50)	NOT NULL,
    gender    VARCHAR(20),
    message   TEXT
)CHARACTER SET utf8mb4
 COLLATE utf8mb4_unicode_ci
 ENGINE InnoDB;



SELECT * FROM request;

SELECT
	email AS 'Email',
    user_name AS 'Name',
    gender AS 'Gender',
    country AS 'Country',
    message AS 'Message'
FROM
	request
WHERE
    email = 'mukiva2261@gmail.com';
    