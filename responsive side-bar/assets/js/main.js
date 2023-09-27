// >> SHOW MENU
const showMenu = (toggleId,navbarId,bodyId) =>{
    const toggle = document.getElementById(toggleId),
    navbar = document.getElementById(navbarId),
    bodypadding = document.getElementById(bodyId)

    if(toggle && navbar){
        toggle.addEventListener('click',()=>{
            // appare menu
            navbar.classList.toggle('show')
            // rotate Toggle
            toggle.classList.toggle('rotate')
            // padding body 
            bodypadding.classList.toggle('expander')
        })
    }
}
showMenu('nav-toggle','navbar','body');

// >> ACTIVE LINK
const linkColor = document.querySelectorAll('.nav__link');
function colorLink(){
    linkColor.forEach(l => l.classList.remove('active'))
    this.classList.add('active');
}
linkColor.forEach(l => l.addEventListener('click',colorLink));