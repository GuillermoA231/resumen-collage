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
  console.log(resumen.fecha + " funca?");
  seccion.innerHTML = `
  <article id="mainDiv">
  <div class="row d-flex align-items-center justify-content-center fw-bold display-5">
        ${resumen.fecha}
      </div>
      <div class="row" id="header">
        <div>
          <img src="./img/categoria.png" class="img-fluid" alt="Imagen 1" />
        </div>
        <div class="col-4 d-flex justify-content-center align-items-center"></div>
      </div>
      <div class="row h2">
        <div>${resumen.categoria}</div>
        <div>${resumen.titulo}</div>
        <div>${resumen.efector}</div>
      </div>
      <div class="row">
        <div class="col-12 h4 m-0 p-3" id="title">
         ${resumen.descripcion}
        </div>
      </div>
      <div class="row" id="collage">
        <div class="col-12" id="collageMain">
        </div>
      </div>
      <div class="row d-flex justify-content-center align-items-center p-0 m-0" id="footer">
                <div class="col-4 rounded text-center justify-content-center flex-wrap flex-grow-1 align-items-center">
                  <h2>AREA OPERATIVA</h2>
                  <h2><strong>${resumen.areaOperativa}</strong></h2>
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
