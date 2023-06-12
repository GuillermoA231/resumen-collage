document.getElementById('src-btn').addEventListener('click', function() {
  var images = document.querySelectorAll('#mainDiv img');
  images.forEach(function(img) {
    img.setAttribute('crossOrigin', 'anonymous');
  });

  html2canvas(document.getElementById('mainDiv')).then(function(canvas) {
    var imgData = canvas.toDataURL('image/png');
    var link = document.createElement('a');
    
    // Generar el nombre del archivo con la fecha actual
    var currentDate = new Date();
    var fileName = 'Resumen -' + currentDate.getFullYear() + '-' + (currentDate.getMonth() + 1) + '-' + currentDate.getDate() + '.png';

    link.href = imgData;
    link.download = fileName;
    link.click();
  });
});
