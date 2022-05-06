const idInfo = window.location.href.split("=").pop();
console.log(idInfo);

const imagenPortada = document.getElementById("imagenPortada");

const infoAnime = document.getElementById("infoAnime");

const urlID = `https://api.jikan.moe/v4/anime/${idInfo}`;

fetch(urlID)
  .then((resp) => resp.json())
  .then((datos) => {
    /* console.log(datos.data); */

    const datosNecesarios = {
      id: datos.data.mal_id,
      imagen: datos.data.images.jpg.image_url,
      sinopsis: datos.data.synopsis,
      nombre: datos.data.title,
    };

    /* Insertar la imagen */

    const templateImg = `<img
                            src="${datosNecesarios.imagen}"
                            alt=""
                            class="img-fluid"/>`;

    imagenPortada.innerHTML = templateImg;

    /* Insertar la información */
    const templateInfo = `<h1>${datosNecesarios.nombre}<h1>
                            <p>${datosNecesarios.sinopsis}</p>
                            <div class="favorito">
                            <button id="agregarFavoritos" type="button" class="btn btn-dark mt-5">
                                Agregar a favoritos
                            </button>
                            </div>`;

    infoAnime.innerHTML = templateInfo;

    /* console.log(datosNecesarios); */

    const agregarFavoritos = document.getElementById("agregarFavoritos");
    /* console.log(favorito); */

    agregarFavoritos.addEventListener("click", () => {
      const datos = {
        id: datosNecesarios.id,
        nombre: datosNecesarios.nombre,
        imagen: datosNecesarios.imagen,
      };

      if (localStorage.getItem("favoritos")) {
        console.log("existe un elemento");
        const favoritos = JSON.parse(localStorage.getItem("favoritos"));

        favoritos = favoritos.filter((el) => el.nombre != datos.nombre)
            favoritos.push(datos)


        favoritos.push(datos);

        localStorage.setItem("favoritos", JSON.stringify(favoritos));
      } else {
        console.log("no tienes favoritos");
        const favoritos = [];
        favoritos.push(datos);

        localStorage.setItem("favoritos", JSON.stringify(favoritos));
      }

      /*  JSON.parse(localStorage.getItem("favoritos")); */

      /* localStorage.setItem("favoritos", JSON.stringify(datos)); */
    });
  });
