/* Funciones: nos permiten reutilizar código */

/* function saludar(nombre = "Anonimo", apellido = ""){
    
    //string normal
    //console.log('Hola mi nombre es: ', nombre, apellido); //forma 1
    //template template Strings || plantillas literales
    //console.log(`Hola mi nombre es: ${nombre?"Katia":"Desconocido"}`);//template Strings || plantillas literales / Lo que está dentro de las llaves se llama operador ternario o condicional.
    return `Mi nombre es ${nombre} ${apellido}`
} */

//saludar("", "Pérez");//sobreescribe el valor de arriba. Representa la invocación o llamada de la función

//let funcionSaludar = saludar('Felipe', 'Maqueda');
//console.log(funcionSaludar);

//console.log(saludar('Alberto', 'Hernandez').toLocaleLowerCase());

/* document.write('<h1>Este es un h1</h1>');
console.log('<h1>Este es un h1</h1>');
console.log(`<h1>Este es un h1</h1>`);//plantilla literal
 */
/* if(){
    codigo
}else{
    otro codigo
} */

//console.log(funcionSaludar.toLocaleUpperCase());

/* Funcion declarada */
console.log(suma(10, 20)); //se puede mandar a llamar incluso antes de inicializarla a eso se le llama "hosting"
function suma(a, b) {
  return a + b;
}

/* Funciones expresadas | fincion expresión */
const resta = function (a, b) {
  return a - b;
};

console.log(resta(30, 10));

/* setTimeout(()=>{ //callback

}, 3000); */

//Funcion flecha
/* const multiplicacion = (a,b) =>{
    return a*b;
} */

const multiplicacion = (a, b) => a * b; //puede usarse tambien de esta forma, si "{"

console.log(multiplicacion(40, 5));
