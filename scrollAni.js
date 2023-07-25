// const boxes = document.querySelectorAll(".box");

// const highlights = document.querySelector(".highlights")

// highlights.addEventListener("scroll", checkBox);
// checkBox();

// function checkBox() {
//   const highlightsHeight = highlights.innerHeight;
  
//   boxes.forEach((box) => {
//     const bottomBox = box.getBoundingClientRect().bottom;
    
//     if (highlightsHeight - bottomBox > 50) {
//       box.classList.add("show");
//     } else {
//       box.classList.remove("show");
//     }
//   });
// }

const boxes = document.querySelectorAll(".box");
const highlights = document.querySelector(".highlights");
const boxCountToShow = 3; // Görünecek kutu sayısı

highlights.addEventListener("scroll", checkBox);
checkBox();

function checkBox() {
  const highlightsHeight = highlights.clientHeight;

  let visibleBoxes = 0;

  boxes.forEach((box) => {
    const bottomBox = box.getBoundingClientRect().bottom;

    if (highlightsHeight - bottomBox > 50 && visibleBoxes < boxCountToShow) {
      box.classList.add("show");
      visibleBoxes++;
    } else {
      box.classList.remove("show");
    }
  });
}