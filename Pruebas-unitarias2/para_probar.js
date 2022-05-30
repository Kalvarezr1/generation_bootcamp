const palindrome = (string) => {
  if (typeof string === "undefined") return;

  return string.split("").reverse().join("");
};

const average = (array) => {
  if (typeof array === "undefined") return;

  if (array.length === 0) return [];
  let sum = 0;
  array.forEach((num) => {
    sum += num;
  });
  return sum / array.length;
};

/* Sirve para exportar los metodos o funiones par que esten diponibles en otros documentos, si la llave tiene el mismo nobre que se le va a asinar, no es necesario ponerlo dos veces. */
module.exports = {
  palindrome: palindrome,
  average: average,
};
