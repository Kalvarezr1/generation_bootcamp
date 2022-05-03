/* 
Seleccione la sección con una identificación de contenedor sin usar querySelector.*/
const $seccion = document.getElementById("container");
/*
Seleccione la sección con una identificación de contenedor usando querySelector.*/
const contenedor = document.querySelector("#container");
/*
Seleccione toda la lista de elementos con una clase de "segundo".*/
const cotenerdor3 = document.querySelectorAll(".second");
/*
Seleccione un elemento de la lista con una clase de tercero, pero solo el elemento de la lista dentro de la etiqueta ol.*/
const contenedor4 = document.querySelector("ol.third");
/*
Dar el texto "¡Hola!" a la sección con un ID de contenedor.
Agregue la clase principal al div con una clase de pie de página.*/
contenedor.innerHTML += "Hola";
/*
Elimine la clase principal en el div con una clase de pie de página.
Crea un nuevo elemento li.
Dale al li el texto "cuatro".
Agregue el li al elemento ul.
*/
