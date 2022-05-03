/* 
Escriba una función y llámela al hacer clic en un botón para mostrar una alerta con:

El número de enlaces en la página.
El primer enlace de la página.
El último enlace de la página.
*/

function funcion1() {
  const var1 = document.getElementById("boton1");
  //alert("Hola");
  alert(document.links);
  alert(document.links[0]);
  alert(document.links[-1]);
}
