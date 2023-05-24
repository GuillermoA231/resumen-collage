import Resumen from "./classResumen.js";
import { resumenValidaciones } from "./helpers.js";

//variables globales
let formularioResumen = document.getElementById("formResumen");
let modalResumen = document.getElementById("modalResumen");
const btnCrearResumen = document.querySelector("#btnCrearResumen");
let listaResumen = [];
/*se obtiene cada input del formulario*/
let fecha = document.getElementById("fecha"),
  categoria = document.getElementById("categoria"),
  areaOperativa = document.getElementById("areaOperativa"),
  areaProgramatica = document.getElementById("areaProgramatica"),
  descripcion = document.getElementById("descripcion");
//manejadores de eventos
formularioResumen.addEventListener("submit", prepararFormularioResumen);
btnCrearResumen.addEventListener("click", desplegarModalResumen);
//

//funciones

export function formatDate(input) {
  input.value = input.value.replace(/\D/g, "");
  if (input.value.length > 2 && input.value.length <= 4) {
    input.value = input.value.slice(0, 2) + "/" + input.value.slice(2);
  } else if (input.value.length > 4 && input.value.length <= 6) {
    input.value =
      input.value.slice(0, 2) +
      "/" +
      input.value.slice(2, 4) +
      "/" +
      input.value.slice(4);
  } else if (input.value.length > 6) {
    input.value =
      input.value.slice(0, 2) +
      "/" +
      input.value.slice(2, 4) +
      "/" +
      input.value.slice(4, 8);
  }
}

function desplegarModalResumen() {
  modalResumen.show();
}

function prepararFormularioResumen(e) {
  e.preventDefault();
  console.log("en el evento submit");
  crearResumen();
}
function crearResumen() {
  // Validar Datos
  //console logs para verificar read de inputs
  console.log(fecha.value);
  console.log(categoria.value);
  console.log(areaOperativa.value);
  console.log(areaProgramatica.value);
  console.log(descripcion.value);
  const resumen = resumenValidaciones(fecha.value);
  // Los datos son validos?
  if (resumen.length === 0) {
    // Crear Resumen
    const resumenEjemplo = new Resumen(
      "24/05/2023",
      "Covid",
      "Área Operativa Mariano Moreno",
      "Área Programática Centro",
      "Descripción ejemplo"
    );
    console.log(resumenEjemplo);
  } else {
    console.log("Ocurrieron errores");
  }

  // Agregar el resuemn en el arreglo de resumenes

  // Guardar elarray en localStorage
}
