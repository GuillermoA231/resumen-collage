let formularioResumen = document.getElementById("formResumen");
let realFileBtn = document.getElementById("real-file");
let customBtn = document.getElementById("custom-button");
let customTxt = document.getElementById("custom-text");
let imagePreview = document.getElementById("image-preview");
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
  let collageWidth = 1800;// ancho del div collage

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

        let maxWidthSize;
        let maxHeightSize;

        if (i === 0) {
          // Primera imagen
          if (numImages === 7) {
            maxWidthSize = collageWidth;
            maxHeightSize = Math.floor(collageWidth * numColumns / 6.2);
          } else if (numImages === 8) {
            maxWidthSize = Math.floor(collageWidth * 0.66);
            maxHeightSize = Math.floor(maxWidthSize / 2.53);
          }
        } else {
          // Resto de las imágenes
          maxWidthSize = Math.floor(collageWidth / numColumns);
          maxHeightSize = Math.floor(maxWidthSize / 1.3);
        }
        let widthSize = maxWidthSize * 0.9;
        let heightSize = maxHeightSize * 0.9;
        
        column.style.width = `${widthSize}px`;
        column.style.height = `${heightSize}px`;

        column.style.maxWidth = `${maxWidthSize}px`;
        column.style.maxHeight = `${maxHeightSize}px`;

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
function intercambiarFilas() {
  var collageDiv = document.getElementById("collage");
  var rows = collageDiv.getElementsByClassName("row");

  if (rows.length >= 3) {
    var thirdRow = rows[2];
    var firstRow = rows[0];

    collage.insertBefore(thirdRow, firstRow);
    var secondRow = rows[1];
    collage.insertBefore(firstRow, secondRow.nextSibling);
    
    intercambiarImagenes(thirdRow);
  }
}

function intercambiarImagenes(row) {
  var columns = row.getElementsByClassName("col");

  if (columns.length >= 3) {
    var thirdColumn = columns[2];
    var firstColumn = columns[0];

    row.insertBefore(thirdColumn, firstColumn);

    var images = thirdColumn.getElementsByTagName("img");
    if (images.length >= 2) {
      var secondImage = images[1];
      thirdColumn.insertBefore(secondImage, images[0]);
    }
  }
}

function dibujarCollage() {
  var collage = document.getElementById("collageMain");

  renderCollage();
 
  setTimeout(function () {
    intercambiarFilas();
  }, 0);
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("btnCrear").addEventListener("click", function () {
    setTimeout(function () {
      dibujarCollage();
    }, 300);
  });
});
