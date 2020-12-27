'use strict';

const navar = document.querySelector('#navbar');
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
homecontacButton.addEventListener('click',()=>{
    
    
    scrollIntoView('#contact');

}); 

//home-opacity when scrolling 
   
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll',()=>{  
    home.style.opacity= 1- window.scrollY/homeHeight;
});
document.addEventListener('scroll',()=>{
    homecontacButton.style.opacity= 1- window.scrollY/homeHeight;
   });
//contactme btn 
homecontacButton.addEventListener('mouseenter',()=>{
    homecontacButton.style.opacity=1;
});
homecontacButton.addEventListener('mouseleave',()=>{
    homecontacButton.style.opacity= 1- window.scrollY/homeHeight;
});

// arrow up Button when click 
const arrowUpbtn = document.querySelector('.arrowup__btn');

document.addEventListener('scroll',()=>{

       if( window.scrollY>homeHeight){
        arrowUpbtn.style.opacity=1;
        
       }else{
        arrowUpbtn.style.opacity=0;
       }
});
arrowUpbtn.addEventListener('click',()=>{
    
    scrollIntoView('#home');
});

//project data-filter , data-type

const workBtnContaniner = document.querySelector('.work__categories');
const projectContaniner = document.querySelector('.work__projects'); 
const projects = document.querySelectorAll('.project');

workBtnContaniner.addEventListener('click',(event)=>{
    const filter = event.target.dataset.filter || event.target.parentNode.dataset.filter;
   
    if(filter==null){
        return;
    }
    console.log(filter);
    projects.forEach((project)=>{
        console.log(project.dataset.type);  

     if(filter==='*' || filter===project.dataset.type) {
        project.classList.remove('invisible');   //All이거나 데이터 타입과 필터가 일치하는 것은 보여줘야하니까 안보여지는 클래스는 제거하고
     }else{
        project.classList.add('invisible');// 데이터 타입과 필터가 일치 하지 않는 것들은 안보여야 하니까 얀보이게 하는 클래스를 추가.
     } 
    });




});



//scrollIntoView fucntion

function scrollIntoView(selector){
    const scrollTo=document.querySelector(selector);
   scrollTo.scrollIntoView({behavior: "smooth"});
   }

 