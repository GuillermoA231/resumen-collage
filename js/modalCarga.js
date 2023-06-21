import Resumen from "./classResumen.js";

let formResumen = document.getElementById(`formResumen`);
let modalResumen = new bootstrap.Modal(document.getElementById("modalEditar"));

formResumen.addEventListener("submit", prepararFormularioResumen);

function prepararFormularioResumen(e) {
  document.querySelector("section").removeAttribute("hidden");
  e.preventDefault();
  // Obtener los valores del formulario
  const fecha = document.getElementById("fecha").value;
  const categoria = document.getElementById("categoria").value;
  const areaOperativa = document.getElementById("areaOperativa").value;
  const areaProgramatica = document.getElementById("areaProgramatica").value;
  const descripcion = document.getElementById("descripcion").value;
  const titulo = document.getElementById("titulo").value;
  const efector = document.getElementById("efector").value;

  // Crear un objeto Resumen con los datos ingresados
  const resumen = new Resumen(
    fecha,
    categoria,
    areaOperativa,
    areaProgramatica,
    descripcion,
    titulo,
    efector
  );
  console.log(resumen);
  // Llamar a la función para generar el contenido en readResumen.js
  generarContenido(resumen);

  // Cerrar el modal
  modalResumen.hide();
}

function generarContenido(resumen) {
  let seccion = document.querySelector("#seccionResumen");
  // Obtener el nombre de la imagen según la categoría seleccionada
  let imagenNombre = resumen.categoria.replace(/\s+/g, '');

  seccion.innerHTML = `
  <section class="my-4 text-center">
    <button id="src-btn" class="btn btn-primary rounded-4">
      <span class="display-1"> DESCARGAR RESUMEN</span>
    </button>
  </section>
    <article id="mainDiv" class="h-100 resumen-container">
      <div class="row d-flex align-items-center justify-content-center fw-bold display-5 fecha-container">
        ${resumen.fecha}
      </div>
      <div class="row" id="header">
        <div class="banner-container">
          <img src="./img/banners/${imagenNombre}.jpg" alt="Imagen 1" />
        </div>
        <div class="col-4 d-flex justify-content-center align-items-center"></div>
      </div>
      <div class="row h2 py-5 fecha-container">
        <p class="display-4">${resumen.categoria}</p>
        <p class="display-4">${resumen.titulo}</p>
        <p class="display-4">${resumen.efector}</p>
      </div>
      <div class="row py-5  fecha-container">
        <div class="col-12 h4 m-0 p-3" id="title">
          <p class="display-5">${resumen.descripcion}</p>
        </div>
      </div>
      <div class="row" id="collage"class="collage-container">
        <div class="col-12" id="collageMain">
        </div>
      </div>
      <div class="row d-flex justify-content-center align-items-center p-0 m-0" id="footer">
        <div class="col-4 rounded text-center justify-content-center flex-wrap flex-grow-1 align-items-center">
        <strong><h2>AREA OPERATIVA</h2>
          <h2>${resumen.areaOperativa}</h2></strong>
        </div>
        <div class="col-8">
          <img
            id="logo"
            class="img-thumbnail"
            src="./img/logoMSP.png"
            alt="Logo Banner"
            srcset=""
            class="rounded"
          />
        </div>
      </div>
    </article>
  `;
}

