CREATE DATABASE ankuran_online_mule4;

USE DATABASE ankuran_online_mule4;

DROP TABLE addresses;
DROP TABLE employee;


CREATE TABLE employee(
   employee_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
   employee_name VARCHAR(50) NOT NULL,
   email_id VARCHAR(150) NOT NULL,
   employee_gender VARCHAR(50) NOT NULL,
   employee_phone BIGINT NOT NULL,
   creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
		
CREATE TABLE addresses (
    address_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    employee_id INT,
    is_current_address BOOLEAN,
    street  VARCHAR(150) NOT NULL,
    city  VARCHAR(150) NOT NULL,
    district  VARCHAR(150) NOT NULL,
    pin_number INT NOT NULL,
    country  VARCHAR(150) NOT NULL,
    FOREIGN KEY (employee_id) REFERENCES employee(employee_id) ON DELETE CASCADE ON UPDATE CASCADE
);

show tables;

DESC employee;
DESC addresses;

SELECT * FROM employee;
SELECT * FROM addresses;

SELECT COUNT(*) FROM employee;
SELECT COUNT(*) FROM addresses;

SELECT employee_id FROM employee ORDER BY employee_id DESC LIMIT 1;