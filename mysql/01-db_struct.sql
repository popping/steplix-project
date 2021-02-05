CREATE DATABASE IF NOT EXISTS steplix;

USE steplix;

CREATE TABLE IF NOT EXISTS currencies (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    description VARCHAR(50) NOT NULL,
    symbol CHAR(3) NOT NULL
);

CREATE TABLE IF NOT EXISTS rates (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_currency INT,
    value DOUBLE NOT NULL,
    created_at TIMESTAMP,
    CONSTRAINT fk_rate_currencies FOREIGN KEY (id_currency) REFERENCES currencies(id)
);

CREATE USER IF NOT EXISTS 'steplix'@'%' IDENTIFIED BY 'steplix';

GRANT ALL PRIVILEGES ON steplix.* TO 'steplix'@'%';

