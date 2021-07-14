// const { getItem, addCard, storeData } = require("../js/data");


storeData();
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

// Add to cart
let cart = [];
const addToCartButton = document.querySelectorAll(".add");
addToCartButton.forEach((el) => {
  console.log(el);
  el.addEventListener("click", (e) => {
    const item ={};
    item.price= e.target.parentNode.children[2].textContent;
    item.name= e.target.parentNode.children[0].children[0].textContent;
    item.image= e.target.parentNode.parentNode.children[0].children[0].src;


    addCard(item)
  });
});
