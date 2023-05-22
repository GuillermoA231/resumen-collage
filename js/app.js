

document.getElementById('src-btn').addEventListener('click', function() {
    var images = document.querySelectorAll('#mainDiv img');
    images.forEach(function(img) {
      img.setAttribute('crossOrigin', 'anonymous');
    });
  
    html2canvas(document.getElementById('mainDiv')).then(function(canvas) {
      var imgData = canvas.toDataURL('image/png');
      var link = document.createElement('a');
      link.href = imgData;
      link.download = 'captura.png';
      link.click();
    });
  });
  