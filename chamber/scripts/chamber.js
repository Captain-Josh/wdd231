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

        const url = "data/members.json"
        const cards = document.querySelector("#members");
        // const list = document.getElementById("members-list");
        
        let allMember =[];
        const getMembersData = async()=>{
            try{
                const response = await fetch(url);
                const data = await response.json();
                allMember = data;
                displayMembers(allMember);
            }
            catch (error){
                console.error("Error loading members:", error)
            }
        }
        
        getMembersData()
        
        function displayMembers(members){

            cards.innerHTML ="";
            members.forEach(member => {
                let memberCard = `<section class="grid-member">
                    <h2>${member.name}</h2>
                    <p><strong>Address:</strong> ${member.address}</p>
                    <p><strong>Phone: </strong> ${member.phone}</p>
                    <p><strong>Visit Website:</strong> ${member.website}</p>
                    <p id="mem-description"> ${member.description}</p>
                    <p id="mem-level"><strong>Membership:</strong> ${getLevel(member.level)}</p>
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


    function setupToggleButtons() {
    const gridButton = document.getElementById("grid-view");
    const listButton = document.getElementById("list-view");

    gridButton.addEventListener("click", ()=>{
        cards.classList.add("now-grid");
        cards.classList.remove("now-list");
        
    })

    listButton.addEventListener("click", ()=>{
        cards.classList.add("now-list");
        cards.classList.remove("now-grid");

    })
    
}

setupToggleButtons();


}});
