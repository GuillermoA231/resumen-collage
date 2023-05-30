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
  updateCollage();
}

function crearResumen() {
  console.log(
    fecha.value +
      " + " +
      categoria.value +
      " + " +
      areaProgramatica.value +
      " + " +
      areaOperativa.value +
      " + " +
      descripcion.value
  );
}
