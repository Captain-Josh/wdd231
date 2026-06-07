import {places} from "../data/places.mjs"
console.log(places)
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastmodified").textContent = `Last Modified: ${document.lastModified}`;


const hamburger = document.getElementById("ham-menu");
const navBar = document.getElementById("nav-mobile");

hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("show");
    navBar.classList.toggle("show");

})


const showHere = document.getElementById("all-places");
function displayItems(places){
    places.forEach(x => {
        const card = document.createElement("div");
        const photo = document.createElement("img");
        photo.src =`images/${x.photo_link}`;
        photo.alt = x.name;
        photo.loading = "lazy";
        card.appendChild(photo);

        const title = document.createElement("h2");
        title.innerText= x.name;
        card.appendChild(title);

        const cost = document.createElement("h3");
        cost.innerText= x.cost;
        card.appendChild(cost);

        const address = document.createElement("address");
        address.innerText= x.address;
        card.appendChild(address);

        const description = document.createElement("p");
        description.innerText= x.description;
        card.appendChild(description);

        
        const button = document.createElement("button");
        button.textContent = "Learn More";
        button.classList.add("learn-btn");
        
        button.addEventListener("click", () => {
            alert(`More about ${x.name}`);
        });
        card.appendChild(button);



        showHere.appendChild(card);

    });
}
displayItems(places)


const messageBox = document.getElementById("visit-message");

const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();

let message = "";

if (!lastVisit) {
    message = "Welcome! Let us know if you have any questions.";
} else {
    const diffTime = now - lastVisit;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 1) {
        message = "Back so soon! Awesome!";
    } else if (diffDays === 1) {
        message = "You last visited 1 day ago.";
    } else {
        message = `You last visited ${diffDays} days ago.`;
    }
}

messageBox.textContent = message;

localStorage.setItem("lastVisit", now);