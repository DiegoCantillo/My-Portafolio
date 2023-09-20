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
