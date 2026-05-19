document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastmodified").textContent = `Last Modified: ${document.lastModified}`;


const hamburger = document.getElementById("ham-menu");
const navBar = document.getElementById("nav-mobile");

hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("show");
    navBar.classList.toggle("show");

})


document.addEventListener("DOMContentLoaded", ()=>{
    if(document.getElementsByTagName("body")[0].id === "directory-page"){

        const url = "../data/members.json"
        const cards = document.querySelector("#members")
        
        const getMembersData = async()=>{
            try{
                const response = await fetch(url);
                const data = await response.json();
                displayMembers(data);
            }
            catch (error){
                console.error("Error loading members:", error)
            }
        }
        
        getMembersData()
        
        function displayMembers(members){
            cards.innerHTML ="";
            members.forEach(member => {
                let memberCard = `<section>
                    <h2>${member.name}</h2>
                    <p>Address: ${member.address}</p>
                    <p>Phone: ${member.phone}</p>
                    <p>Visit Website: ${member.website}</p>
                    <p>${member.description}</p>
                    <p>Membership: ${getLevel(member.level)}</p>
                    <img src="${member.image}"
                         alt="${member.name}"
                         width ="340"
                         height = "440"
                         loading="lazy">
                 </section>`; 
                cards.innerHTML += memberCard;
            });
        
        }

        function getLevel(level){
           const levels={
            1:"Member",
            2:"Silver",
            3:"Gold"
           };
           return levels[level] || "Unknown";
        }
    }
})
