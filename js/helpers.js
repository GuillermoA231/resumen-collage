
const descripcion = document.getElementById("descripcion");
const maxLength = parseInt(descripcion.getAttribute('maxlength'));
const fechaInput = document.getElementById("fecha");
const areaProgramatica = document.getElementById("areaProgramatica");
const areaOperativa = document.getElementById("areaOperativa");

function validarFecha() {
  const fechaIngresada = new Date(fechaInput.value);
  const fechaActual = new Date();

  fechaActual.setHours(0, 0, 0, 0); // Establecer la hora actual a las 00:00:00 para comparar solo las fechas

  if (fechaIngresada > fechaActual) {
    return false;
  }
  return true;
}

function validarAreaOperativa() {

  if (areaProgramatica.value === "" && areaOperativa.value !== "") {
    return false;
  }
  return true;
}
function validarDescripcion() {
  
  if (descripcion.value.length > maxLength) {
    descripcion.value = descripcion.value.substring(0, maxLength);
  }
  
  return true;
}


export function resumenValidacion() {
  const fechaInput = document.getElementById("fecha");
  const areaOperativaSelect = document.getElementById("areaOperativa");
  const descripcionTextarea = document.getElementById("descripcion");

  let resumen = "";

  if (!validarFecha(fechaInput)) {
    resumen = "La fecha no debe ser posterior a la fecha actual.";
  } else if (!validarAreaOperativa()) {
    resumen = "Debe seleccionar primero un área programática.";
  } else if (!validarDescripcion()) {
    resumen = "La descripción no puede superar los 300 caracteres.";
  }

  return resumen;
}
