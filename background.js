function adjustBackground() {
    var imgWidth = 1920; // Görselin genişliği
    var imgHeight = 1080; // Görselin yüksekliği
    var winWidth = $(window).width();
    var winHeight = $(window).height();
    var widthRatio = winWidth / imgWidth;
    var heightRatio = winHeight / imgHeight;
    var scaleRatio = Math.max(widthRatio, heightRatio);
    var newWidth = imgWidth * scaleRatio;
    var newHeight = imgHeight * scaleRatio;
    var offsetX = (newWidth - winWidth) / 2;
    var offsetY = (newHeight - winHeight) / 2;

    $('body').css({
      'background-image': 'url("img/tezgah.jpeg")',
      'background-size': newWidth + 'px ' + newHeight + 'px',
      'background-position': -offsetX + 'px ' + -offsetY + 'px'
    });
  }

  $(document).ready(function() {
    adjustBackground();
    $(window).resize(adjustBackground);
  });