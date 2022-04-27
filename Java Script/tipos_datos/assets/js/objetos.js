const nombre = "Katia";
const nombre2 = new String("Katia"); //Estamos creando un objeto de tipo string

const persona = new Object();
persona.nombre = "Katia";
persona.apellido = "Alvarez";
persona.edad = "23";

console.log(persona);

const nuevaPersona = {
  /* Atributos o propiedades */
  nombreCompleto: {
    nombre: "Katia",
    apellido: "Alvarez",
  },
  edad: 23,
  pasatiemp: ["nadar", "dibujar", "anime"],
  tieneTrabajo: true,
  /* metodo */
  saludar: function () {
    console.log("Hola");
  },
  sumar: function (n1, n2) {
    console.log(`El resultado de la suma es ${n1 + n2}`);
  },
};

"Hola".length; /* Atributo o propiedad */
"Hola".toLocaleLowerCase(); //Mètodo

console.log(nuevaPersona.edad);
console.log(nuevaPersona.nombreCompleto.nombre);
console.log(nuevaPersona.pasatiemp[1]);

nuevaPersona.saludar();
nuevaPersona.sumar(5, 10);

/* Para cambiar el valor */
nuevaPersona.edad = 10;
console.log(nuevaPersona);

/* Agregar nuevo atributo */
nuevaPersona.colorFavorito = "Morado";
console.log(nuevaPersona.colorFavorito);

console.log(nuevaPersona.hasOwnProperty("edad"));

console.log(Object.keys(nuevaPersona));
console.log(Object.values(nuevaPersona));
