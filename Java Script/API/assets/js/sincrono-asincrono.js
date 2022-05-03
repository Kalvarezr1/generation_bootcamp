//setInterval()
//ejecutar lineas de código cada cierto tiempo

/* let tiempo = 5000;
let datos;

setTimeout(() => {
  datos = "Jonathan";
  console.log(datos);
}, tiempo);

console.log(datos);
console.log("Hola"); */

/* const datos = [
  {
    nombre: "Katia",
    edad: 28,
  },
  {
    nombre: "Katia",
    edad: 23,
  },
  {
    nombre: "Saul",
    edad: 18,
  },
];

function obtenerDatos() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(datos);
    }, 3000);
  });
}

obtenerDatos().then((datos) => {
  console.log(datos);
});

async function obtenerDatosAsync() {
  const datosObtenidos = await obtenerDatos();
  console.log(datosObtenidos);
}

obtenerDatosAsync(); */

// let tiempo = 5000;

// setTimeout(()=>{
//     let datos = "Juseppe";
//     console.log('ejecutado en 3 segundos');
//     console.log(datos);
// },tiempo)

// console.log("Hola");
// console.log(datos);

const datos = [
  {
    nombres: "Juseppe",
    edad: 28,
  },
  {
    nombres: "Luis",
    edad: 23,
  },
  {
    nombres: "Raul",
    edad: 18,
  },
];

function obtenerDatos() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(datos);
    }, 3000);
  });
}

obtenerDatos().then((datos) => {
  console.log(datos);
});

async function obtenerDatosAsync() {
  const datosObtenidos = await obtenerDatos();
  console.log(datosObtenidos);
}

obtenerDatosAsync();
