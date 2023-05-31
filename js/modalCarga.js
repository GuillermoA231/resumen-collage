import Resumen from "./classResumen.js";
import { resumenValidacion } from "./helpers.js";


let formResumen = document.getElementById(`formResumen`);
let modalResumen = new bootstrap.Modal(document.getElementById("modalEditar"));
const btnCrearResumen = document.getElementById(`btnCrear`);
const alertaModal = document.getElementById(`alertaModal`);
const alertaaModal = document.getElementById(`alertaAModal`);



formResumen.addEventListener("submit", prepararFormularioResumen);

function prepararFormularioResumen(e) {
  document.querySelector("section").removeAttribute("hidden");
  e.preventDefault();
  // Obtener los valores del formulario
  const fecha = document.getElementById('fecha').value;
  const categoria = document.getElementById('categoria').value;
  const areaOperativa = document.getElementById('areaOperativa').value;
  const areaProgramatica = document.getElementById('areaProgramatica').value;
  const descripcion = document.getElementById('descripcion').value;
  const titulo = document.getElementById('titulo').value;

  
  // Crear un objeto Resumen con los datos ingresados
  const resumen = new Resumen(fecha, categoria, areaOperativa, areaProgramatica, descripcion, titulo);
console.log(resumen);
  // Llamar a la función para generar el contenido en readResumen.js
  generarContenido(resumen);

  // Cerrar el modal
  modalResumen.hide();
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
  `;
}