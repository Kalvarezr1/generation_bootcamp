/* escribe un ciclo anidado que imprima el siguiente patrón.

 *  
 * *  
 * * *  
 * * * *  
 * * * * * 

 * */
//Resuelto
/* for (let i = 1; i <= 5; i++) {
  //1
  for (let j = 1; j <= i; j++) {
    //5
    document.write("*");
    //console.log("\n");
  }

  document.write("<br>");
} */

//-------------Ejercicio 1----------------

//Escribe un loop que haga lo siguiente:

//Repetidamente imprime el valor de la variable xValue, disminuyendo por 0.5 su valor cada iteración.
//El ciclo se mantendrá mientras que el valor de xValue sea positivo.
/* 
calcula.addEventListener("click", function () {
  let input1 = document.getElementById("input1").value;
  while (input1 > 0) {
    document.getElementById("res1").innerHTML += input1 + " ";
    input1 -= 0.5;
  }
});
reset1.addEventListener("click", function () {
  document.getElementById("res1").innerHTML = "";
});
 */

//-----------------Ejercicio 2------------------
//Imprime todos los números impares entre 1 y 100

/* var num1 = parseInt(prompt("Introduzca el primer número"));
var num2 = parseInt(prompt("Introduzca el segundo número"));

document.write(
  "Los números impares que existen entre " + num1 + " y " + num2 + " son: "
);

for (var i = num1; i < num2; i++) {
  if (i % 2 != 0) {
    document.write("<br>" + i);
  }
} */

//-----------------------Ejercicio 3-----------------------
//Escribe un ciclo while que imprima de 1 a n dentro de corchetes cuadrados
//Por ejemplo: si n = 6 imprime [1] [2] [3] [4] [5] [6]

//Ejercicio resuelto con ciclo for
/* function numeros() {
  for (let i = 1; i <= 6; i++) {
    document.write("[ " + i + " ]");
  }
}
numeros(); */

//Ejercicio resuelto con ciclo while
function numeros() {
  let n = 1; //variable de control
  while (n <= 6) {
    //condición a evaluar
    document.write("[ " + n + " ]");
    n++; //modificador de la variable ctrl
  }
}
numeros();

//-----------------Ejercicio 4------------------
//Escribe un ciclo que calcule la suma de los numeros positivos entre 1 y n
//ejemplo: n = 5 sum = 15
//por que (1 + 2 + 3 + 4 +5 )

/* let n = 5;
let suma = 0;

for (let i = 1; i <= n; i++) {
  suma = suma + i;
}

document.write(suma); */
