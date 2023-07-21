const images = ["section img/2.png", "section img/1.png", "section img/3.png", "section img/4.png"];
let currentImageIndex = 0;

function showImage(index) {
  const imageElement = document.getElementById("imgSec");
  imageElement.src = images[index];
}

function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  showImage(currentImageIndex);
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  showImage(currentImageIndex);
}

function startSlideshow() {
    // İlerleme işlevini 2 saniyede bir çağırmak için setInterval kullanın
    setInterval(() => {
      nextImage();
    }, 4000); // 2000 milisaniye (2 saniye) olarak ayarlanmıştır. İstediğiniz süreyi burada düzenleyebilirsiniz.
  }
  
  // İlk resmi göster
  showImage(currentImageIndex);
  
  // Otomatik slayt gösterisini başlat
  startSlideshow();

