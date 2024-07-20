

const click = document.getElementById("img--click");
const cortinaL = document.getElementById("cortina--left");
const cortinaR = document.getElementById("cortina--right");
const host = document.getElementById("img--host");

click.addEventListener("click", () => {
    click.style.display = "none";
    host.style.display = "none";
    cortinaL.style.width = "0px"; 
    cortinaR.style.width = "0px"; 
});

