class Persona {
  //atributos
  #id = 0;
  static #contador = 0;
  #nombre = "";
  edad = 0;
  correo = "";

  constructor(nombre, edad, correo) {
    this.#nombre = nombre;
    this.edad = edad;
    this.correo = correo;
    this.#id = ++Persona.#contador;
  }

  //setters & getters
  //set & get
  //fijar y obtener
  //Se usan y se llaman como si fueran atributos
  get getNombre() {
    return this.#nombre;
  }
  set setNombre(nombre) {
    this.#nombre = nombre;
  }

  //mètodos
  cambiarNombre(nombre) {
    this.#nombre = nombre;
  }

  #saludar() {
    let mensaje = `Hola mi nombre es: ${this.#nombre}`;
    return mensaje;
  }

  mostrarSaludo() {
    return this.#saludar();
  }

  static mostrarContador() {
    return Persona.#contador;
  }
}

//instancia de la clase persona
const persona1 = new Persona("Pedro", 30, "pedro@gmail.com");
const persona2 = new Persona("Karina", 24, "kari@gmail.com");
const persona3 = new Persona("Pepe", 34, "pepe@gmail.com");

persona1.setNombre = "José";

persona1.cambiarNombre("Antonio");

console.log(persona1);
console.log(persona2);
console.log(persona3);

console.log(persona1.mostrarSaludo());
console.log(persona2.mostrarSaludo());

console.log(Persona.mostrarContador());
