-- CREATE DATABASE generation_bootcamp;

-- USE generation_bootcamp;

-- CREATE TABLE cohorte12 (cohorte12_id int NOT NULL auto_increment, alumno_id int NOT NULL, PRIMARY KEY(cohorte12_id));
/*
ALTER TABLE `generation_bootcamp`.`cohorte12` 
ADD COLUMN `instructor_id` INT NOT NULL AFTER `alumno_id`,
ADD COLUMN `numero_alumnos` INT NOT NULL AFTER `instructor_id`,
ADD COLUMN `horario` CHAR(10) NOT NULL AFTER `numero_alumnos`,
ADD COLUMN `tipo_sesiones` VARCHAR(255) NOT NULL AFTER `horario`,
ADD COLUMN `ciudad` VARCHAR(255) NOT NULL AFTER `tipo_sesiones`;
*/
-- Crear una nueva tabla
/*
CREATE TABLE `generation_bootcamp`.`alumno` (
  `alumno_id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`alumno_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci
COMMENT = 'Tabla alumno creada';
--Insertar columnas a la tabla
ALTER TABLE `generation_bootcamp`.`alumno` 
ADD COLUMN `edad` INT NOT NULL AFTER `nombre`,
ADD COLUMN `CURP` VARCHAR(255) NOT NULL AFTER `edad`,
ADD COLUMN `RFC` VARCHAR(255) NOT NULL AFTER `CURP`,
ADD COLUMN `nivel_ingles` VARCHAR(255) NOT NULL AFTER `RFC`,
ADD COLUMN `amonestaciones` INT NOT NULL AFTER `nivel_ingles`;
*/
-- Crear la llave foranea, en la tabla alumno
/*
ALTER TABLE `generation_bootcamp`.`alumno` 
ADD CONSTRAINT `FK1_alumno_id_alumno`
  FOREIGN KEY (`alumno_id`)
  REFERENCES `generation_bootcamp`.`cohorte12` (`alumno_id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;
  */