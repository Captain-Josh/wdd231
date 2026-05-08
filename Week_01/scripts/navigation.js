const hamburger = document.getElementById("ham-menu");
const navLinks = document.getElementById("nav-bar");

hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("show");
    navLinks.classList.toggle("show");
})

document.querySelector(".currentyear").textContent = new Date().getFullYear();
document.querySelector(".lastmodified").textContent = `Last Modified: ${document.lastModified}`;
