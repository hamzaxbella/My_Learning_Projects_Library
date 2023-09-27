// determine variables
const navbar = document.querySelector(".navbar");
// scrollY observer
window.onscroll = function(){
    if(this.scrollY > 20){
        navbar.classList.add("nav-wakeup");
    } else {
        navbar.classList.remove('nav-wakeup');
    }
}