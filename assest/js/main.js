$(".owl-1").owlCarousel({
  margin: 10,
  loop: true,
  dots: false,
  center: true,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: false,
  responsive: {
    0: {
      items: 3,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});


$(".owl-2").owlCarousel({
  margin: 10,
  loop: true,
  dots: false,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: false,
  responsive: {
    0: {
      items: 2,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
});

$(".owl-3").owlCarousel({
  margin: 10,
  loop: true,
  dots: true,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: false,
  responsive: {
    0: {
      items: 2,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
});

$(".owl-part").owlCarousel({
  margin: 10,
  loop: true,
  dots: true,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: false,
  responsive: {
    0: {
      items: 2,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
});


// Back To top
let myTopButton = document.querySelector('.back-to-top');
myTopButton.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

// Show Back To Top Button
window.onscroll = function () {
    if (window.scrollY >= 600) {
        myTopButton.classList.add('active')
    } else {
        myTopButton.classList.remove('active')
    }
}

const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");
function navLinks() {
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    if(nav.classList.contains('nav-active')) {
      burger.classList.add("opened")
    } else {
      burger.classList.remove("opened")
    }
  });
}
navLinks();

const allLi = document.querySelectorAll('ul li')
allLi.forEach(Li => Li.addEventListener('click', () => {
  nav.classList.remove("nav-active")
  burger.classList.remove("opened")
}))





