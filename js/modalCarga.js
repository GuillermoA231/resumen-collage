import Resumen from "./classResumen.js";

let fecha = document.getElementById("fecha"),
  categoria = document.getElementById("categoria"),
  areaProgramatica = document.getElementById("areaProgramatica"),
  areaOperativa = document.getElementById("areaOperativa"),
  descripcion = document.getElementById("descripcion");

  formularioResumen.addEventListener("submit", prepararFormularioResumen);

function prepararFormularioResumen(e) {
  document.querySelector("section").removeAttribute("hidden");
  e.preventDefault();
  crearResumen();
  renderCollage();
}

// function crearResumen() {
//   const modalSuccess = Swal.mixin({
//     customClass: {
//       title: "text-success-emphasis",
//       closeButton: "text-danger",
//       confirmButton: "btn btn-success mx-2",
//     },
//     buttonsStyling: false,
//     showCloseButton: true,
//     color: "red",
//     background: "green",
//     iconColor: "yellow",
//   });
  // const resumen = resumenValidacion(
  //   servicioNombre.fecha,
  //   profesor.value,
  //   descripcion.value,
  //   socialProf.value,
  //   tiempo.value,
  //   precio.value,
  //   imagen.value,
  //   revision.value,
  //   descripcionProfesional.value
  // );
  // mostrarMensaje(resumen);
  // if (resumen.length === 0) {
  //   const servicioNuevo = new Servicio(
  //     undefined,
  //     servicioNombre.value,
  //     profesor.value,
  //     imagen.value,
  //     socialProf.value,
  //     precio.value,
  //     tiempo.value,
  //     categoria.value,
  //     descripcion.value,
  //     revision.value,
  //     [],
  //     0,
  //     descripcionProfesional.value
  //   );
  //   listaServicios.push(servicioNuevo);
  //   guardarEnLocalstorage();
  //   crearFila(servicioNuevo, listaServicios.length);
  //   modalSuccess.fire(
  //     "Servicio creado",
  //     "El Servicio nuevo fue creado exitosamente",
  //     "success"
  //   );
  //   limpiarFormulario();
  //   modalServicio.hide();
  // }
// }
function generarContenido(resumen) {
  let seccion = document.querySelector("#seccionResumen");
  console.log(resumen.fecha + " funca?")
  seccion.innerHTML = `
  <article id="mainDiv">
  <div class="row d-flex align-items-center justify-content-center fw-bold display-5">
        ${resumen.fecha}
      </div>
      <div class="row" id="header">
        <div class="bg-danger">
          <img src="./img/categoria.png" class="img-fluid" alt="Imagen 1" />
        </div>
        <div class="col-4 bg-primary d-flex justify-content-center align-items-center"></div>
      </div>
      <div class="row h2">
        <div>${resumen.categoria}</div>
        <div>${resumen.titulo}</div>
        <div>${resumen.efector}</div>
      </div>
      <div class="row">
        <div class="col-12 bg-info h4 m-0 p-3" id="title">
          Descripcion Resumen: ${resumen.descripcion}
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
