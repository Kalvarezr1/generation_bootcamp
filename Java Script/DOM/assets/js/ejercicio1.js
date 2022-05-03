/* 
Modificar el estilo del texto del párrafo mediante código javascript utilizando DOM. Ejemplo de archivo HTML:
Al hacer clic en el botón, la fuente, el tamaño de fuente y el color del texto del párrafo deben cambiar.
 */

function js_style() {
  const parr = document.getElementById("text");
  parr.style.fontFamily = "sans-serif";
  parr.style.fontSize = "40px";
  parr.style.color = "blue";
}
