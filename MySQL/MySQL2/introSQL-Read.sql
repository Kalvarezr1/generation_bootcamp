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

-- Limitar la cantidad de datos 
SELECT * FROM actor LIMIT 10;

-- Ordenar los datos dependiendo de una columna de forma Ascendente
SELECT * FROM city ORDER BY country_id ASC;

-- Ordenar los datos dependiendo de una columna de forma descendente
SELECT * FROM city ORDER BY city DESC LIMIT 10;

/*
Operadores de comparacion
Igual            =
Distinto         !=
Mayor            >
Menor            <
Mayor o igual    >=
Menor o igual    <=
Como            LIKE
No es como      NOT LIKE 
*/
SELECT * FROM city WHERE city = "Yuzhou";

SELECT * FROM actor WHERE first_name = "Penelope";

SELECT * FROM actor WHERE first_name != "Penelope";

SELECT * FROM actor WHERE actor_id > 50;

SELECT *FROM actor WHERE actor_id < 100;

SELECT * FROM actor WHERE actor_id >= 50;

SELECT *FROM actor WHERE actor_id <= 100;

SELECT * FROM actor WHERE first_name LIKE "Penelope";
-- Se utiliza para realizar busquedas
-- Selecciona de la tabla todas las personas que terminen su primer nombre con "an"
SELECT * FROM actor WHERE first_name LIKE "%an";

-- Seleccionar de la tabla todas las personas cuyo first_name empiece con "an"
SELECT * FROM actor WHERE first_name LIKE "an%";

-- Seleccionar de la tabla personas cuyo first_name contengan "N"
SELECT * FROM actor WHERE first_name LIKE "%nn%";

-- Seleccionar un patron
SELECT * FROM actor WHERE first_name LIKE 	"%A__E%"; 

-- NOT LIKE
SELECT * FROM actor WHERE first_name NOT LIKE 	"%A__E%"; 

-- Uniendo todo
SELECT * FROM actor WHERE first_name LIKE "%nn%" ORDER BY last_name ASC LIMIT 5;

/*
AND    Debe cumplir ambas condiciones 
OR     Basta con que cumpla una de ellas
*/

SELECT * FROM actor WHERE actor_id > 50 AND first_name LIKE "%n%";

SELECT * FROM actor WHERE first_name LIKE "%n%" OR first_name LIKE "%M%";
