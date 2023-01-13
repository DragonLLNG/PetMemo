'use strict';

const leftBtn = document.querySelector('.left');
const rightBtn = document.querySelector('.right');
const imageItems = Array.from(document.querySelectorAll('.main-img'));
const IMAGE_NUM = imageItems.length;

leftBtn.addEventListener('click', swipe);
rightBtn.addEventListener('click', swipe);


function swipe(e){
    const currentImage = document.querySelector('.main-img.active');
    
    const currentIndex = imageItems.indexOf(currentImage);

    let nextIndex;

    if(e.currentTarget.classList.contains('left')){
        nextIndex = currentIndex === 0 ? IMAGE_NUM-1 : currentIndex -1 ;
    }
    else {
        nextIndex = currentIndex === IMAGE_NUM-1 ? 0 : currentIndex+1 ;
    }

    imageItems[nextIndex].classList.add('active');
    currentImage.classList.remove('active');
}



const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);


function mobileMenu(e) {
    console.log(e.target);
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}


//Toggle 
const newButton = document.querySelector(".new-btn");
console.log(newButton);
newButton.addEventListener("click", function(){
    document.querySelector(".new-section").classList.toggle("hide");
});


