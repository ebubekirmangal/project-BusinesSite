// Responsive İletişim Bilgileri

const contact = document.querySelector(".contact")
const cardLisans = document.querySelector(".cardLisans")
const iletişimBilgileri = document.querySelector(".tt").addEventListener("click",getInfo)

function getInfo(){
if(contact.classList.contains("active")==false){
  cardLisans.classList.add("active")
  contact.classList.add("active")
  console.log("tuşa basıldı")

}
else{
  cardLisans.classList.remove("active")
  contact.classList.remove("active")
}
}