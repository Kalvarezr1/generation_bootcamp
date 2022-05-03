/* 
Escriba una función de JavaScript para obtener los valores de Nombre y Apellido del siguiente formulario.

Imprime los nombres en la consola.
*/

/* function getFormvalue() {
  const form = document.getElementById("form1");

  const datos = Object.fromEntries(new FormData(form));

  console.log(datos);

  debugger;
} */

const formulario = document.getElementById("form1");

function getFormvalue(e) {
  var x = document.getElementById("form1");
  for (var i = 0; i < x.length; i++) {
    if (x.elements[i].value != "Submit") {
      e.preventDefault();
      console.log(x.elements[i].value);
    }
  }
}

formulario.addEventListener("submit", getFormvalue);
