CREATE DATABASE TPO;

/* DROP TABLE IF EXISTS `producto`; */

CREATE TABLE cliente (
    ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL DEFAULT "",
    telefono INT(11) NOT NULL DEFAULT 0,
    email VARCHAR(100) NOT NULL DEFAULT "",
    texto VARCHAR(400) NOT NULL DEFAULT ""
);


USE TPO;

INSERT INTO cliente (nombre, telefono,email,texto) VALUES ('Kabul',1234567,'nombre@dominio','texto1');
