const menu = document.querySelector(".menu");
const navBar = document.querySelector(".navigation");
const close = document.querySelector(".close");

console.log(navBar);

menu.addEventListener("click", ()=> {
    navBar.style.display = "block";
    menu.style.display = "none";
    close.style.display = "block"
})


close.addEventListener("click", ()=>{
    navBar.style.display = "none";
    menu.style.display = "block";
    close.style.display = "none"
})