-- LEER

-- Muestra las bases de datos que tenemos
SHOW DATABASES;

-- Seleccionar la base de datos a usar
USE sakila;

-- Leer los datos de una tabla
SELECT * FROM actor;

SELECT * FROM city;

-- Leer partes de una tabla
SELECT city, city_id FROM city;