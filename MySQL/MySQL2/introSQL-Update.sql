-- Actualizar

-- Agregar una columna
ALTER TABLE mascota ADD COLUMN especie VARCHAR(255) NOT NULL;

SELECT * FROM mascotita;
SELECT * FROM persona;

-- Agregar una columna en una posicion especifica
ALTER TABLE mascota ADD COLUMN cumpleanios DATE AFTER edad;

-- Modificar las caracteristicas de una columna
ALTER TABLE mascota MODIFY cumpleanios VARCHAR(255);
ALTER TABLE persona MODIFY cumpleanios DATE;

-- No podemos cambiar el nombre de una columna, se tiene que cambiar toda la columna
ALTER TABLE mascota CHANGE COLUMN edad edadP int NOT NULL;

-- Renombrar una tabla 
ALTER TABLE mascota RENAME mascotita;

-- Actualizar los datos de una fila
-- Error 1175: no podemos actualizar si no seleccionamos la llave primaria
UPDATE mascotita SET especie = "Gato" WHERE nombre = "Leo";

UPDATE mascotita SET especie = "Gato" WHERE mascota_id = 1;

UPDATE persona SET persona_id = 3 WHERE persona_id = 4;

UPDATE persona SET persona_id = 4 WHERE persona_id = 5;