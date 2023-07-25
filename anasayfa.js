const imgs = ["section img/2.png", "section img//1.png", "section img//3.png", "section img//4.png"];
let currentIndex = 0;

function showImg() {
  const displayedImage = document.getElementById("imgSec");
  displayedImage.setAttribute("src", imgs[currentIndex]);
  currentIndex++;
  if (currentIndex === imgs.length) {
    currentIndex = 0;
  }
}

setInterval(showImg, 1500);

