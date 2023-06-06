let formularioResumen = document.getElementById("formResumen");
let realFileBtn = document.getElementById("real-file");
let customBtn = document.getElementById("custom-button");
let customTxt = document.getElementById("custom-text");
let imagePreview = document.getElementById("image-preview");
let fileList = [];
let collageImages = [];

console.log(`  +   +   +   +  +  +  +  +  +  +  +  +`);

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

  let numImages = uploadedImages.length;

  // Verificar la cantidad de imágenes cargadas
  if (numImages >= 6 && numImages <= 9) {
    collage.innerHTML = "";

    let numRows = Math.ceil(numImages / 3);
    let numColumns = 3;

    let rowIndex = 0;
    let columnCount = 0;
    let row = document.createElement("div");
    row.classList.add("row");

    for (let i = numImages - 1; i >= 0; i--) {
      // Verificar si hay una imagen disponible para esa posición
      if (uploadedImages[i].src !== "") {
        let column = document.createElement("div");
        column.classList.add("col");
        let image = document.createElement("img");
        image.src = uploadedImages[i].src;
        column.appendChild(image);
        column.classList.add("image-container");

        let maxWidth;
        let maxHeight;

        if (numImages === 7 && rowIndex === numRows - 1) {
          // Última fila con una sola imagen
          maxWidth = collageWidth;
          maxHeight = Math.floor(collageWidth / numColumns * 1.2);
        } else {
          maxWidth = collageWidth / numColumns;
          maxHeight = Math.floor(maxWidth / 1.2);
        }

        column.style.maxWidth = `${maxWidth}px`;
        column.style.maxHeight = `${maxHeight}px`;

        row.appendChild(column);
        columnCount++;

        if (columnCount === numColumns) {
          row.classList.add("justify-content-end"); // Alinea las imágenes a la derecha
          collage.appendChild(row);
          rowIndex++;
          row = document.createElement("div");
          row.classList.add("row");
          columnCount = 0;
        }
      }
    }

    if (columnCount > 0) {
      row.classList.add("justify-content-end"); // Alinea las imágenes a la derecha
      collage.appendChild(row);
    }

    collageImages = Array.from(collage.getElementsByTagName("img"));
  } else {
    console.log(
      "Por favor, carga entre 6 y 9 imágenes antes de generar el collage."
    );
  }
}


function renderCollage() {
  let uploadedImages = imagePreview.getElementsByTagName("img");
  let collageWidth = 1200; // ancho del div collage

  let numImages = uploadedImages.length;

  // Verificar la cantidad de imágenes cargadas
  if (numImages >= 6 && numImages <= 9) {
    collage.innerHTML = "";

    let numRows;
    let numColumns;

    // Determinar el formato de la grilla según la cantidad de imágenes
    if (numImages === 6) {
      numRows = 3;
      numColumns = 2;
    } else if (numImages === 7 || numImages === 8 || numImages === 9) {
      numRows = 3;
      numColumns = 3;
    }

    let rowIndex = 0;
    let columnCount = 0;
    let row = document.createElement("div");
    row.classList.add("row");

    for (let i = numImages -1; i > -1; i--) {
      if (uploadedImages[i].src !== "") {
        let column = document.createElement("div");
        column.classList.add("col");
        let image = document.createElement("img");
        image.src = uploadedImages[i].src;
        column.appendChild(image);
        column.classList.add("image-container");

        let maxWidth;
        let maxHeight;

        if (i === 0) {
          // Primera imagen
          if (numImages === 7) {
            maxWidth = collageWidth;
            maxHeight = Math.floor(collageWidth / numColumns * 1.2);
          } else if (numImages === 8) {
            maxWidth = Math.floor(collageWidth * 0.66);
            maxHeight = Math.floor(maxWidth / 1.2);
          }
        } else {
          // Resto de las imágenes
          maxWidth = Math.floor(collageWidth / numColumns);
          maxHeight = Math.floor(maxWidth * 1.5);
        }

        column.style.maxWidth = `${maxWidth}px`;
        column.style.maxHeight = `${maxHeight}px`;

        row.appendChild(column);
        columnCount++;
      }

      if (columnCount === numColumns) {
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
    console.log(
      "Por favor, carga entre 6 y 9 imágenes antes de generar el collage."
    );
  }
}





function dibujarCollage() {
  var collage = document.getElementById("collageMain");
  renderCollage();
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("btnCrear").addEventListener("click", function () {
    setTimeout(function () {
      dibujarCollage();
    }, 300);
  });
});
