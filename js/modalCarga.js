import Resumen from "./classResumen.js";

let formularioResumen = document.getElementById("formResumen");
let realFileBtn = document.getElementById("real-file");
let customBtn = document.getElementById("custom-button");
let customTxt = document.getElementById("custom-text");
let imagePreview = document.getElementById("image-preview");
let collage = document.getElementById("collage");
let fileList = [];
let collageImages = [];

formularioResumen.addEventListener("submit", prepararFormularioResumen);

customBtn.addEventListener("click", function () {
  realFileBtn.click();
});

realFileBtn.addEventListener("change", function () {
  if (realFileBtn.files && realFileBtn.files.length > 0) {
    fileList = Array.from(realFileBtn.files);
    customTxt.innerHTML = `${fileList.length} archivo(s) seleccionado(s)`;
    imagePreview.innerHTML = "";

    fileList.forEach((file) => {
      let reader = new FileReader();
      reader.onload = function (e) {
        let img = document.createElement("img");
        img.src = e.target.result;
        img.classList.add("preview-image");
        imagePreview.appendChild(img);
      };
      reader.readAsDataURL(file);
    });
  } else {
    fileList = [];
    customTxt.innerHTML = "No archivos seleccionados";
    imagePreview.innerHTML = "";
  }
});

function prepararFormularioResumen(e) {
  document.querySelector('section').removeAttribute('hidden');
  e.preventDefault();
  crearResumen();
  renderCollage();
  updateCollage();
}

function crearResumen() {
  
}

function updateCollage() {
  let fileList = realFileBtn.files;

  if (fileList.length === 9) {
    for (let i = 0; i < collageImages.length; i++) {
      collageImages[i].src = URL.createObjectURL(fileList[i]);
    }
  } else {
    console.log("Please select exactly 9 images.");
  }
}
function renderCollage() {
  let uploadedImages = imagePreview.getElementsByTagName("img");
  let collageWidth = 800; //ancho del div collage

  if (uploadedImages.length === 9) {
    collage.innerHTML = "";

    let rowIndex = 0;
    let columnCount = 0;
    let row = document.createElement("div");
    row.classList.add("row");

    for (let i = 0; i < uploadedImages.length; i++) {
      let column = document.createElement("div");
      column.classList.add("col");
      let image = document.createElement("img");
      image.src = uploadedImages[i].src;

      // Verificar segun resolucion
      if (i === 0 || i === 4 || i === 6) {
        column.classList.add("image-container", "image-2x2");
      } else {
        column.classList.add("image-container");
      }

      let width = Math.floor(collageWidth / 2); //Ajusta ancho
      let height = Math.floor(width / 1.5); // Ajusta altura
      column.style.width = `${width}px`;
      column.style.height = `${height}px`;

      column.appendChild(image);
      row.appendChild(column);
      columnCount++;

      if (columnCount === 3) {
        collage.appendChild(row);
        rowIndex++;
        row = document.createElement("div");
        row.classList.add("row");
        columnCount = 0;
      }
    }

    if (columnCount > 0) {
      collage.appendChild(row);
    }

    collageImages = Array.from(collage.getElementsByTagName("img"));
  }
}
