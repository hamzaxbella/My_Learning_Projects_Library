    // >> MENU CONTROLLER
const showMenu = (toggleId,navId) =>{
    const 
     toggle = document.getElementById(toggleId),
     nav = document.getElementById(navId);
    
    if(toggle && nav){
        toggle.addEventListener('click',()=>{
            nav.classList.toggle('open');
        })
    }
}
showMenu('nav-toggle','nav-menu');

    // >> GASP ANIMATIONS
// text
gsap.from('.home__title',{opacity:0,duration:1.5,delay:.5,y:50})
gsap.from('.home__description',{opacity:0,duration:1.5,delay:.8,y:50})
// img airpod
gsap.from('.airpod1',{opacity:0,duration:2,delay:1.2,y:-40})
gsap.from('.airpod2',{opacity:0,duration:2,delay:1.4,y:40})
// nav
gsap.from('.nav__logo',{opacity:0,duration:2.5,delay:1.5,y:25})
gsap.from('.nav__toggle',{opacity:0,duration:2.5,delay:1.7,y:25})
gsap.from('.nav__item',{opacity:0,duration:2.5,delay:1.9,y:25,ease:'Expo.out',stagger:.3})
gsap.from('.nav__btn',{opacity:0,duration:2.5,delay:2,y:25})
// scroll
gsap.from('.home__scroll',{opacity:0,duration:1.5,delay:2.3,y:30})
