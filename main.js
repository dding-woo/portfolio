'use strict';

const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {

    if (window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    }
    else {
        navbar.classList.remove('navbar--dark');
    }
});




//handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
const navbarMenItem = document.querySelectorAll('.navbar__menu__item');


navbarMenu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;


    if (link == null) {
        return;
    }

    scrollIntoView(link);
});


// navbar-menu toggle 
const toggleBtn = document.querySelector('.navbar__toggle-btn');
toggleBtn.addEventListener('click', () => {

    navbarMenu.classList.toggle('navbar__menu-toggle');


});

//handle scrolling  when contact me button 

const homecontacButton = document.querySelector('.home__contact');
homecontacButton.addEventListener('click', () => {


    scrollIntoView('#contact');

});

//home-opacity when scrolling 

const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    home.style.opacity = 1 - window.scrollY / homeHeight;
});
document.addEventListener('scroll', () => {
    homecontacButton.style.opacity = 1 - window.scrollY / homeHeight;
});
//contactme btn 
homecontacButton.addEventListener('mouseenter', () => {
    homecontacButton.style.opacity = 1;
});
homecontacButton.addEventListener('mouseleave', () => {
    homecontacButton.style.opacity = 1 - window.scrollY / homeHeight;
});

// arrow up Button when click 
const arrowUpbtn = document.querySelector('.arrowup__btn');

document.addEventListener('scroll', () => {

    if (window.scrollY > homeHeight) {
        arrowUpbtn.style.opacity = 1;

    } else {
        arrowUpbtn.style.opacity = 0;
    }
});
arrowUpbtn.addEventListener('click', () => {

    scrollIntoView('#home');
});

//skill value graph
const skillValue = document.querySelectorAll(".skill .skill__bar .skill__value")

document.addEventListener("scroll", () => {
    if (window.scrollY > 1490) {
        skillValue.forEach((graph) => {
            graph.classList.add("on");
        });
    }
});
// slider portpolio img

const slider = document.querySelector(".project__slider");
const slide = document.querySelectorAll(".project");
let currentIndex = 0;
const sliderCount = slide.length;
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
        moveslide(currentIndex - 1);
    } else {
        moveslide(currentIndex + 2);

    }
});
nextBtn.addEventListener("click", () => {
    if (currentIndex < sliderCount - 1) {
        moveslide(currentIndex + 1)
    } else {
        moveslide(0);
    }
});

function moveslide(num) {
    slider.style.left = -num * 1230 + "px";
    currentIndex = num;

}




//scrollIntoView fucntion

function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({ behavior: "smooth" });
}

