const imgs = ["img/yapim.jpg", "img/yapim2.jpg", "img/yapim.jpg", "img/yapim2.jpg"];
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

