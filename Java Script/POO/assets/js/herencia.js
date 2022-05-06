class Pokemon {
  //atributos
  #nombre = "";
  #edad = 0;
  #evolucion = "";

  //Método constructor: asigna los valores que se mandarán como parametros
  constructor(nombre, edad, evolucion, tipo) {
    this.#nombre = nombre;
    this.#edad = edad;
    this.#evolucion = evolucion;
  }

  get nombre() {
    return this.#nombre;
  }

  atacar() {
    return console.log(`${this.#nombre}, está atacando`);
  }

  evolucionar() {
    // || - Operador de corto circuito
    // false- toma el valor de la izquierda
    //true - toma el valor de la derecha
    //const EVOLUCION = this.#evolucion;
    let mensaje = "";

    if (this.#evolucion === "") {
      mensaje = "No puedo evolucionar";
      console.log(mensaje);
    } else {
      mensaje = `${this.#nombre} ha evolucionado a ${this.#evolucion}`;
      this.#nombre = this.#evolucion;
      console.log(mensaje);
    }

    return console.log(mensaje);
  }
}

/* const charmander = new Pokemon("Charmander", 2, "Charmeleon", "fuego");

const bulbasaur = new Pokemon("Bulbasaur", 1, "Ivisaur", "Planta");

console.log(charmander);
console.log(bulbasaur);

charmander.atacar();
bulbasaur.atacar();

charmander.evolucionar();

console.log(charmander); */

class TipoFuego extends Pokemon {
  // atributos
  #tipo = "";
  constructor(nombre, edad, evolucion, tipo) {
    super(nombre, edad, evolucion);
    this.#tipo = "Fuego";
  }

  atacar() {
    return console.log(
      `${super.nombre}, está lanzando un ataque de tipo ${this.#tipo}`
    );
  }
}

let nombre = "Charmander";
const charmander = new TipoFuego("Charmander", 2, "Charmeleon");
console.log(charmander);

charmander.atacar();
