'use strict';

//Hamburger menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);


function mobileMenu(e) {
    console.log(e.target);
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}