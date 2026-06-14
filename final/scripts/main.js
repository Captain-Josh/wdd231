const hamburger = document.getElementById("ham-menu");
const navBar = document.getElementById("nav-mobile");

hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("show");
    navBar.classList.toggle("show");
    
})

document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastmodified").textContent = `Last Modified: ${document.lastModified}`;