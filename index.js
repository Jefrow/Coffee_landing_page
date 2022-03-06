window.onscroll = function() {stickyNav()}

var navbar = document.querySelector(".main-nav-container"); 

function stickyNav() {
  if (window.pageYOffset > 100) {
    navbar.classList.add("sticky")
  }else{
    navbar.classList.remove("sticky");
  }
}

const burger = document.querySelector(".burger-container");
const navLink = document.querySelector(".nav-links")

const activeNav =()=> {
    navLink.classList.toggle('active');
}

burger.addEventListener("click", activeNav);