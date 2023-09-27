// movement animation to hppen

const card = document.querySelector('.card');
const container = document.querySelector('.container');
// items
const title = document.querySelector('.title');
const seaker = document.querySelector('.seaker img');

// moving animation Event
container.addEventListener('mousemove',(e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 20;
    card.style.transform = `rotateY(${-xAxis}deg) rotateX(${yAxis}deg)`;
});
// animate In
container.addEventListener('mouseenter',e => {
    card.style.transition = 'none';
    // pop out
    title.style.transform = "translateZ(150px) perspective(200px)";
    seaker.style.transform = "scale(1.2)  rotate(-25deg)"
})
//animate Out
container.addEventListener('mouseleave',e =>{
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    card.style.transition = 'all .5s ease'
    // popback
    title.style.transform = "translateZ(0px) ";
    seaker.style.transform = "scale(1) rotate(-0deg)"
})

