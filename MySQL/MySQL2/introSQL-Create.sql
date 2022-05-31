-- CREAR

-- Crear una base de datos
-- CREATE SCHEMA familia;
CREATE DATABASE familia;

-- Seleccionar la base de datos 
USE familia;

-- Crear tabla de persona, es necesario poner minimo una columna
-- No es necesario poner NOT NULL en llave primaria por que se va incramentando automaticamente
-- Si no se coloca NOT NULL por defecto va a ser NULL
-- Debemos especificar la llave primaria
-- Para agregar valores unicos se utiliza UNIQUE
CREATE TABLE persona(
persona_id int auto_increment,
nombre varchar(255) NOT NULL,
correo varchar(255) NOT NULL,
edad int NOT NULL,
estado varchar(255) DEFAULT "Desconocido",
cumpleanios DATE NOT NULL,
PRIMARY KEY (persona_id),
CONSTRAINT email_unico UNIQUE (correo)
);

-- Insertar datos en una tabla
-- Tiene que ser en el orden indicado
INSERT INTO persona(nombre, correo, edad, estado, cumpleanios) VALUES
('Katia', 'katia@gmail.com', 28, 'Feliz', '1994-01-24'),
('Anna', 'anita@gmail.com', 24, 'Triste', '1998-05-31');

-- Error 1062: dato unico repetido
INSERT INTO persona(nombre, correo, edad, estado, cumpleanios) VALUES
('Katalina', 'katia@gmail.com', 29, 'Feliz', '1993-02-24');

-- Ingresar datos que no son necesarios (No tiene el cumpleanios)
INSERT INTO persona(nombre, correo, edad, estado) values 
('Pepe', 'pepe@gmail.com', 34, 'Alegre');


-- Ingresar dato con valor por defecto
INSERT INTO persona(nombre, correo, edad, cumpleanios) VALUES
('Toño', 'toñito123@gmail.com', 35, '1979-03-01');

SELECT * FROM persona;

CREATE TABLE mascota
(
mascota_id int auto_increment,
nombre VARCHAR(255),
edad INT NOT NULL,
fk1_persona int NOT NULL,
PRIMARY KEY(mascota_id),
FOREIGN KEY(fk1_persona) REFERENCES persona(persona_id) 
ON DELETE CASCADE 
ON UPDATE CASCADE
);

SELECT * FROM mascota;

INSERT INTO mascota(nombre, edad, fk1_persona) VALUES
('Leo', 3, 1);

INSERT INTO mascota(nombre, edad, fk1_persona) VALUES
('Tobi', 9, 1);

INSERT INTO mascota(nombre, edad, fk1_persona) VALUES
('Beni', 12, 2),
('Patitas', 3, 4);