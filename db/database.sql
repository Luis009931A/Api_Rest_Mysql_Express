CREATE DATABASE IF NOT EXISTS dbforapi;

USE dbforapi;

CREATE TABLE empleado (
    id INT(11) NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(50) DEFAULT NULL,
    sueldo INT(5) DEFAULT NULL,
    PRIMARY KEY (id)
);

DESCRIBE empleado;

INSERT INTO empleado (nombre, sueldo)
VALUES ("Luis Alfredo Yanez", 1000),
        ("Maria Gabriela Veas", 1200);

-- Consulta para obtener un empleado especifico:
SELECT * FROM empleado
WHERE empleado.id == ?;


-- Consulta para eliminar un empleado especifico:
DELETE  FROM empleado
WHERE id = ?;

-- Consulta para actualizar un empleado: ..
UPDATE  empleado
SET nombre = ?, sueldo = ?
WHERE id = ?;

