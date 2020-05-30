DROP DATABASE user_message;
CREATE DATABASE user_message;
USE user_message;
CREATE TABLE request
(
	message_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL UNIQUE,
    user_name VARCHAR(100) 	   NOT NULL,
    email     VARCHAR(100) 	   NOT NULL,
    country   VARCHAR(50)	   NOT NULL,
    gender    VARCHAR(100),
    message TEXT
);
SELECT * FROM request;

