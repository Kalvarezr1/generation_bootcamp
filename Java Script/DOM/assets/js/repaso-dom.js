const $padre = document.querySelector(".padre");
/* 
#-llamar un ID
. - llamar una clase
*/

//crear un elemento nuevo

//La forma correcta de agregar elementos
const $parr = document.createElement("p");
$parr.textContent = "Lorem ipsum";
$parr.textContent += "Lorem ipsum";
$parr.textContent += "Lorem ipsum";

$padre.appendChild($parr);

//agregar elemto con innerHTML
const $cuadro = document.querySelector(".cuadro");
$cuadro.innerHTML = ""; //inicializar el contenido interno del elemento

$cuadro.innerHTML = `
                        <a href='#'>Este es un enlace</a>
                        <ol>
                        <li>Elemento 1</li>
                        <li>Elemento 2</li>
                        <li>Elemento 3</li>
                        </ol>
                        `;

const estaciones = ["Primavera", "Verano", "Otoño", "Invierno"];

const $lista = document.createElement("ul");

estaciones.forEach((elemento) => {
  const $li = document.createElement("li");
  $li.textContent = elemento;
  $lista.appendChild($li);
});
$cuadro.appendChild($lista);
/* document.body.appendChild($lista); */

const continentes = ["Africa", "America", "Europa", "Asia", "Oceania"];
const $ol = document.createElement("ol");
$cuadro.appendChild($ol);

continentes.forEach((continente) => {
  $ol.innerHTML += `<li>${continente}</li>`;
});
