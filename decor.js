// Power Indicator
const marker = document.querySelector('.marker');
const items = document.querySelectorAll('nav ul li');

function indicator(link) {
  marker.style.left = `${link.offsetLeft}px`;
  marker.style.width = `${link.offsetWidth}px`;
}

// Event Listener for Navigation Items
items.forEach(link => {
  link.addEventListener("click", (e) => {
    indicator(e.currentTarget); // Use currentTarget for better accuracy
  });
});

// For Menu Scroll
const nav = document.querySelector('nav');

window.addEventListener("scroll", () => {
  const scrollY = window.pageYOffset;

  // Add/Remove classes based on scroll
  nav.classList.toggle('nav', scrollY >= 20);
  nav.classList.toggle('navBlack', scrollY >= 700);
});

// Menu Toggle
const menu = document.querySelector('#menu');
const menuBox = document.querySelector('#menu-box');

let isMenuOpen = false; // More understandable variable name

menu.addEventListener("click", () => {
  isMenuOpen = !isMenuOpen; // Toggle the boolean

  menuBox.style.display = isMenuOpen ? "block" : "none";
  menu.classList.replace(isMenuOpen ? "fa-bars" : "fa-remove", 
                         isMenuOpen ? "fa-remove" : "fa-bars");
});

// Initialize Owl Carousel
$('.carousel').owlCarousel({
  margin: 20,
  loop: true,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 3,
      nav: true
    },
    600: {
      items: 3,
      nav: true
    },
    1000: {
      items: 3,
      nav: true
    }
  }
});
