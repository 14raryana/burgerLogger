CREATE DATABASE burgers_db;
USE burgers_db;
CREATE TABLE burgers(
    id INT AUTO_INCREMENT NOT NULL,
    burgerName VARCHAR(100),
    devoured BOOLEAN,
    PRIMARY KEY (id)
);