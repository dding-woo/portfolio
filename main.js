'use strict';

const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll',() =>{
    console.log(window.scrollY);    
    console.log(`navbar:${navbarHeight}`);
    
    if (window.scrollY>navbarHeight){
        navbar.classList.add('navbar--dark');
    }
    else{
        navbar.classList.remove('navbar--dark');
    }
});

//handle scrolling when tapping on the navbar menu
const navbarMenu= document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click',(event)=>{
    const target = event.target;
    const link = target.dataset.link;   
    if(link==null){
        return;
    } 
    scrollIntoView(link);
}); 

//handle scrolling  when contact me button 

const homecontacButton = document.querySelector('.home__contact');
homecontacButton.addEventListener('click',(event)=>{
    
    const target = event.target;
    const link = target.dataset.link;   

    scrollIntoView('#contact');

    
}); 
function scrollIntoView(selector){
    const scrollTo=document.querySelector(selector);
   scrollTo.scrollIntoView({behavior: "smooth"});
   }
