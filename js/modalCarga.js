import Resumen from "./classResumen.js";
import { resumenValidacion } from "./helpers.js";

let formResumen = document.getElementById(`formServicio`);
let modalResumen = new bootstrap.Modal(document.getElementById("modalEditar"));
const btnCrearResumen = document.getElementById(`btnCrear`);
const alertaModal = document.getElementById(`alertaModal`);
const alertaaModal = document.getElementById(`alertaAModal`);

let fecha = document.getElementById(`fecha`),
  categoria = document.getElementById(`categoria`),
  areaProgramatica = document.getElementById(`areaProgramatica`),
  areaOperativa = document.getElementById(`areaOperativa`),
  descripcion = document.getElementById(`descripcion`);

let altaResumen = true;
let listaResumen = JSON.parse(localStorage.getItem("listaResumenes")) || [];

formResumen.addEventListener("submit", prepararFormularioResumen);
btnCrearResumen.addEventListener("click", desplegarmodalResumen);
