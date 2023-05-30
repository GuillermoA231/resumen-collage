let formularioResumen = document.getElementById("formResumen");
let realFileBtn = document.getElementById("real-file");
let customBtn = document.getElementById("custom-button");
let customTxt = document.getElementById("custom-text");
let imagePreview = document.getElementById("image-preview");
let collage = document.getElementById("collage");
let fileList = [];
let collageImages = [];

customBtn.addEventListener("click", function () {
  realFileBtn.click();
});

realFileBtn.addEventListener("change", cargarImagenes);

function cargarImagenes() {
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

    renderCollage();
  } else {
    fileList = [];
    customTxt.innerHTML = "No archivos seleccionados";
    imagePreview.innerHTML = "";
    collage.innerHTML = "";
  }
}

function renderCollage() {
    let uploadedImages = imagePreview.getElementsByTagName("img");
    let collageWidth = 1200; // ancho del div collage
  
    if (uploadedImages.length >= 6 && uploadedImages.length <= 9) {
      collage.innerHTML = "";
  
      let rowIndex = 0;
      let columnCount = 0;
      let row = document.createElement("div");
      row.classList.add("row");
  
      for (let i = 0; i < 9; i++) {
        // Verificar si hay una imagen disponible para esa posición
        if (i < uploadedImages.length && uploadedImages[i].src !== "") {
          let column = document.createElement("div");
          column.classList.add("col");
          let image = document.createElement("img");
          image.src = uploadedImages[i].src;
          column.appendChild(image);
  
          // Verificar según resolución
          if (i === 0 || i === 4 || i === 6) {
            column.classList.add("image-container", "image-2x2");
          } else {
            column.classList.add("image-container");
          }
  
          let maxWidth = Math.floor(collageWidth / 2); // ajusta ancho máximo
          let maxHeight = Math.floor(maxWidth / 1.2); // ajusta altura máxima
          column.style.maxWidth = `${maxWidth}px`;
          column.style.maxHeight = `${maxHeight}px`;
  
          row.appendChild(column);
          columnCount++;
        }
  
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
    } else {
      console.log("Por favor, carga entre 6 y 9 imágenes antes de generar el collage.");
    }
  }
  
