const menu = document.querySelector(".menu");
const navBar = document.querySelector(".navigation");
const close = document.querySelector(".close");

const span = document.getElementById("text-animation");


menu.addEventListener("click", () => {
    navBar.style.display = "block";
    menu.style.display = "none";
    close.style.display = "block"
})


close.addEventListener("click", () => {
    navBar.style.display = "none";
    menu.style.display = "block";
    close.style.display = "none"
})

function startAnimation() {
    span.style.animation = "none";
    setTimeout(() => {
        span.style.animation = "typing 3s steps(18) forwards";

        setTimeout(startAnimation, 3000);
    }, 3000);
}
startAnimation();



// SLIDER
let slideIndex = 1;
showSlides(slideIndex)

function plusSlides(n){
    showSlides(slideIndex += n)
}
function currentSlide(n){
    showSlides(slideIndex = n)
}
function showSlides(n){
    let i;
    let slides = document.querySelectorAll(".mySlides");
    let quadrates = document.querySelectorAll(".quadrate"); 
    if(n > slides.length) slideIndex = 1
    if(n < 1) slideIndex = slides.length
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none"
    }
    for(i = 0; i < quadrates.length;i++){
        quadrates[i].className = quadrates[i].className.replace("active","")
    }
    slides[slideIndex-1].style.display = "block";
    quadrates[slideIndex-1].className += " active";
}

let slideIndex1 = 1;
showSlides1(slideIndex1)

function plusSlides1(n){
    showSlides1(slideIndex1 += n)
}
function currentSlide1(n){
    showSlides1(slideIndex1 = n)
}
function showSlides1(n){
    let i;
    let slides1 = document.querySelectorAll(".mySlides1");
    let quadrates1 = document.querySelectorAll(".quadrate1"); 
    if(n > slides1.length) slideIndex1 = 1
    if(n < 1) slideIndex1 = slides1.length
    for(i = 0; i < slides1.length; i++){
        slides1[i].style.display = "none"
    }
    for(i = 0; i < quadrates1.length;i++){
        quadrates1[i].className = quadrates1[i].className.replace("active","")
    }
    slides1[slideIndex1-1].style.display = "block";
    quadrates1[slideIndex1-1].className += " active1";
}