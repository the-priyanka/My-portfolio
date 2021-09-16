window.addEventListener("scroll", function () {
  let navbar = document.querySelector(".navbar");
  let theme_switch_wrapper = document.querySelector(".theme-switch-wrapper")
  navbar.classList.toggle("sticky", window.scrollY > 0);
  theme_switch_wrapper.classList.toggle("theme-switch-wrapper-sticky", window.scrollY > 0);
});

// owl carousel script

$(document).ready(function () {
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });

  // typing animation script
  let typed = new Typed(".typing", {
    strings: ["Front End Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
  typed = new Typed(".typing-2", {
    strings: ["Front End Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
});
// toggle menu/navbar script
let menuBtn = document.querySelector(".menu-btn");

menuBtn.addEventListener("click", toggleMenu)
function toggleMenu() {
  console.log("the priyanka");
  let navbarMenu = document.querySelector(".navbar .menu");
  let menuBtnI = document.querySelector(".menu-btn i");
  navbarMenu.classList.toggle("active");
  menuBtnI.classList.toggle("active");
};

let menuLinks = document.querySelectorAll(".menuLink")
menuLinks.forEach(
  function (menuLink) {
    menuLink.addEventListener("click", toggleMenu)
  }
)



// scroll up btn js
let scrollUpBtn = document.querySelector(".scroll-up-btn");

window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollUpBtn.style.display = "block";
  } else {
    scrollUpBtn.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// dark and light theme 
const toggleSwitch = document.querySelector("input[type='checkbox']")

// Switch theme dynamically
function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark")
    localStorage.setItem("theme", "dark")
  }
  else {
    document.documentElement.setAttribute("data-theme", "light")
    localStorage.setItem("theme", "light")
  }
}

// event listener 
toggleSwitch.addEventListener('change', switchTheme)

// Check localStorage for theme 
const currentTheme = localStorage.getItem("theme")
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme)
  if (currentTheme === "dark") {
    toggleSwitch.checked = true
    darkMode()
  }
}