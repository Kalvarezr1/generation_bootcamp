const Katia = {
  nombreCompleto: {
    nombre: "Katia",
    apellido: "Alvarez",
  },
  edad: 28,
  pasatiempos: ["Cine", "Musica", "Baile"],
};

const victor = {
  nombreCompleto: {
    nombre: "Víctor Manuel",
    apellido: "Soto Alexander",
  },
  edad: 26,
  pasatiempos: ["anime", "leer", "tomar"],
};

const Mitzi = {
  nombreCompleto: {
    nombre: "Mitzi",
    apellido: "Hernandez",
  },
  edad: 23,
  pasatiempos: ["jugar", "dibujar", "ver series"],
};

const Abi = {
  nombreCompleto: {
    nombre: "Abigail",
    apellido: "Moreno",
  },
  edad: 23,
  pasatiempos: ["bailar", "plantas", "fotografía"],
};

const Pedro = {
  nombreCompleto: {
    nombre: "Antonio",
    apellido: "Castañón",
  },
  edad: 18,
  pasatiempos: ["jugar", "salir", "series"],
};

const Adolfo = {
  /* atributos o datos como info */
  nombreCompleto: {
    nombre: "Adolfo",
    apellido: "Gutierrez",
  },

  edad: 28,
  pasatiempos: ["ajedrez", "box", "leer"],
};

const Lizbeth = {
  nombreCompleto: {
    nombre: "Liz",
    apellido: "Rubio",
  },
  edad: 23,
  pasatiempos: ["comer", "hacer ejercicio", "ver pelis"],
};

const manuManito = {
  nombreCompleto: {
    nombre: "Manuel Adán",
    apellido: "Carrillo Zavala",
  },
  edad: 29,
  pasatiempos: ["Leer", "Tomar cafésito", "Estar en casa", "Echar chismecito"],
};

const cohorte12 = [
  Katia,
  victor,
  Mitzi,
  Abi,
  Pedro,
  Adolfo,
  Lizbeth,
  manuManito,
];

for (let i = 0; i < cohorte12.length; i++) {
  if (cohorte12[i].pasatiempos.includes("leer")) {
    console.log(cohorte12[i].nombreCompleto.nombre);
  }
}
