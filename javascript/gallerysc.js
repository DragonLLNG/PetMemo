'use strict';

const api ='live_BafSisQkq9qjRxoQQst6pGOcEJFl71JEsAQuYHqMrLOS2k7CQus3YkDEFFU1yPFb';
const numberImage = 10;
const breed = 'beng';
const url=`https://api.thecatapi.com/v1/images/search?limit=${numberImage}&breed_ids=${breed}`

//Hamburger menu
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



const imageContainer = document.querySelector('.container-img-acc');


getImage();

async function getImage(){
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        showPicture(data);
        if(!response.ok){
            throw Error(`Error: ${response.url} ${response.statusText}`);
        }
    } catch (error) {
        showError(error.message);
    }
}

const errorContainer = document.querySelector('.error');

function showError(error){
    errorContainer.textContent = error;
    if( errorContainer.classList.contains('hidden')){
    errorContainer.classList.remove('hidden');
    }
}

function showPicture(pictures){
   
    for(let i=0; i<pictures.length; i++){
        const picture = document.createElement('img');
        picture.classList.add('main-img-acc');
        picture.src = pictures[i].url;
        console.log(pictures[i].url);
        imageContainer.append(picture);
    }
}

