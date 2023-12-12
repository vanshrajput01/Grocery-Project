//nav bar


window.onscroll = function() {myFunction()};

var navbar = document.getElementById("NB");
let navWithLogo = document.getElementById("nav-with-logo")
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navWithLogo.classList.add("sticky")

    // navbar.style.backgroundColor = "grey"
    // navbar.style.justifyContent = "end"
    navWithLogo.style.display = "block"
    navWithLogo.style.display = "flex"
    navWithLogo.style.backgroundColor = "white"

    
    
    
  } else {
    navWithLogo.classList.remove("sticky");
    // navbar.style.backgroundColor = "white"
    navWithLogo.style.display = "none"

  }
}

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });