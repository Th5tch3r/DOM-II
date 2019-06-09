// Your code goes here
//mouseover, mouseout
const navA = document.querySelectorAll(".nav a");
for (let i = 0; i < navA.length; i++) {
    navA[i].addEventListener("mouseover", function(){
        navA[i].classList.add(".nav-color");
    });
    navA[i].addEventListener("mouseout", function(){
        navA[i].classList.remove(".nav-color")
    });
}

//keydown, keyup
const body = document.querySelector('body');
body.addEventListener('keydown', function(e) {
    e.target.style.color = "blue";
})

body.addEventListener('keyup', function(e){
    e.target.style.color = "pink";
})

//wheel
const imgFluid = document.querySelectorAll(".rounded");
imgFluid.addEventListener("wheel", function(e){
    e.target.style.border = "4px solid blue";
});

const imgAdv = document.querySelector(".img-content img");
imgAdv.addEventListener("wheel", function(e){
    e.target.style.border = "4px solid blue";
})

//scroll
const letsgo = document.querySelector('.content-section .text-content h2');
document.addEventListener('scroll', () => {
	letsgo.style.color = 'limegreen';
});

//mouseenter
const busImg = document.querySelector("home .intro img");
busImg.addEventListener("mouseenter", function(e){
    e.target.style.cursor = "none";
})

//click, db click
const logoHead = document.querySelector(".logo-heading");
logoHead.addEventListener('click', function(e){
    logoHead.classList.toggle('.display-none');
});

const container = document.querySelector(".container");
container.addEventListener("dblclick", function(e){
    container.classList.toggle("display-none")
    e.stopPropagation();
})

//mousemove
const header2 = document.querySelectorAll('.home .text-content h2');
for (i=0; i< header2.length; i++){
    header2[i].addEventListener("mousemove", function(e){
        e.target.style.color = "black"; 
    })
}

//.preventDefault
document.querySelectorAll('a').addEventListener('click', (event) => {
    event.preventDefault()
})