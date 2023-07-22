// Responsive İletişim Bilgileri

const contact = document.querySelector(".contact")
const cardLisans = document.querySelector(".cardLisans")
const iletişimBilgileri = document.querySelector(".tt").addEventListener("click",getInfo)
const caption = document.querySelector(".caption")
const body = document.getElementsByTagName("body")

function getInfo(){
if(contact.classList.contains("active")==false){
  cardLisans.classList.add("active")
  contact.classList.add("active")
  caption.classList.add("active")
  body.classList.add("active")
}
else{
  cardLisans.classList.remove("active")
  contact.classList.remove("active")
  caption.classList.remove("active")
}
}