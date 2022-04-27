/* Hacer un programa que puda el año de nacimiento y calcule tu edad */

/* const year = document.querySelector('#year');
const btnCalcular = document.querySelector('#btnCalcular');

const yearActual = new Date().getFullYear();

btnCalcular.addEventListener('click', calcularEdad);

function calcularEdad() {
    const yearNacimiento = year.value;
    const edad = yearActual - yearNacimiento;
    console.log(edad);
}
 */

//Ejercicio resuelto Nivel 1 (consola)

//Pide datos al usuario con el prompt, como prompt regresa un strig, se utiliza parseInt para convertir a numero
/* const anioNacimiento = parseInt(prompt("Escribe tu año de nacimiento: "));
const anioActual = 2022;
console.log(anioNacimiento);

console.log(`Tienes ${anioActual - anioNacimiento} años`); */

//Ejercicio nivel 2

/* const anioActual = 2022;

function calcularEdad() {
  const anioNacimiento = parseInt(document.getElementById("anio").value);
  console.log(anioNacimiento.value);
  console.log(`Tienes ${anioActual - anioNacimiento} años`);
}

//Opcion dos

const boton = document.getElementById("calcular");
console.log(boton);

boton.addEventListener("click", () => {
  const anioNacimiento = parseInt(document.getElementById("anio").value);
  console.log(anioNacimiento.value);
  console.log(`Tienes ${anioActual - anioNacimiento} años`);
}); */

/* Nivel 3 */

const fecha = new Date();
const anioActual = fecha.getFullYear(); //Obtiene año actual
console.log(anioActual);

const mesActual = fecha.getMonth() + 1; //Obtiene mes actual
console.log(mesActual);

const diaActual = fecha.getDate(); //Obtiene mes actual
console.log(diaActual);

/* const anioActual = 2022;
const mesActual = 4;
const diaActual = 27; */

function mostrarDatos() {
  const nacimiento = document.getElementById("anio").value;
  console.log(nacimiento);
  const nacimientoDividido = nacimiento.split("-");
  console.log(nacimientoDividido);
  const anioNac = parseInt(nacimientoDividido[0]);
  const mesNac = parseInt(nacimientoDividido[1]);
  const diaNac = parseInt(nacimientoDividido[2]);
  console.log(anioNac, mesNac, diaNac);

  if (mesNac <= mesActual && diaNac <= diaActual) {
    console.log(`Tienes ${anioActual - anioNacimiento} años`);
  } else {
    console.log(`Tienes ${anioActual - anioNacimiento - 1} años`);
  }
}
