

function validarCantidadCaracteres(text, min, max) {
  console.log("text helpers: " + text);
  if (text.length >= min && text.length <= max) {
    console.log("Texto Valido");
    return true;
  } else {
    console.log("Texto Invalido");
    return false;
  }
}

export function resumenValidaciones(titulo) {
  let resumen = "";

  if (!validarCantidadCaracteres(titulo, 2, 100)) {
    resumen = "El titulo debe contener entre 2 y 100 caracteres";
  }
  return resumen;
}
