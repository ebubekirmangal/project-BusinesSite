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
  
    setInterval(() => {
      nextImage();
    }, 4000); 
  }
  

  showImage(currentImageIndex);
  

  startSlideshow();

