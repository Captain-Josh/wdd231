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

                <div class="mem-info">
                <h2>${member.name}</h2>
                <p><strong>Address:</strong> ${member.address}</p>
                <p><strong>Phone: </strong> ${member.phone}</p>
                <p><strong>Visit Website:</strong> ${member.website}</p>
                <p id="mem-description"> ${member.description}</p>
                <p id="mem-level"><strong>Membership:</strong> ${getLevel(member.level)}</p>
                </div>
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






document.addEventListener("DOMContentLoaded", ()=>{
    if(document.getElementsByTagName("body")[0].id === "home-page"){
        const currentTemp = document.querySelector('#current-temp');
        const weatherIcon = document.querySelector('#weather-icon');
        const captionDesc = document.querySelector('figcaption');
        const lowTemp = document.getElementById("min-temp");
        const highTemp = document.getElementById("max-temp");
        const humidity = document.getElementById("humidity");

        const lat = 6.615926006765312;
        const lon = 3.3485042234441966;
        const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=a7422f79e404e66bc3f7ab633ce2a092`;

        async function apiFetch(){
            try{
                const response = await fetch(url);
                if (response.ok){
                    const data = await response.json();
                    displayResults(data);
                }
            
            else{
                throw Error(await response.test());
            }
        }
            catch (error){
                    console.error(error);
                }
        }

        apiFetch()

        function displayResults(data){

            const current = data.list[0];
            currentTemp.innerHTML =`
            ${current.main.temp.toFixed(1)}&deg;F`;

            highTemp.innerHTML =`High: ${current.main.temp_max.toFixed(1)}&deg;`;

            lowTemp.innerHTML =`Low: ${current.main.temp_min.toFixed(1)}&deg;`;

            humidity.innerHTML =`Humidity: ${current.main.humidity}%`;

            const description = current.weather[0].description;
            captionDesc.textContent = description;

            const icon =current.weather[0].icon;
            const iconSrc = `https://openweathermap.org/img/wn/${icon}@2x.png`;
            
        weatherIcon.setAttribute("src", iconSrc);
        weatherIcon.setAttribute("alt", description);


        const forecastContainer = document.getElementById("forecast");
        forecastContainer.innerHTML ="";

        const days = ["Tomorrow", "Day 2","Day 3"];

        for(let i=1; i<= 3; i++){
            const forecastIndex = i * 8;
            const item = data.list[forecastIndex];          
            const div = document.createElement("div");
            div.className = "forecast-item";

                div.innerHTML = `
                <p><strong>${days[i - 1]}:</strong> ${item.main.temp}°F</p>
                `;

                forecastContainer.appendChild(div);

        }
        
        }


// SPOTLIGHT SECTION


        const myUrl = "data/members.json"        
        const loadSpotlight = async()=>{
            try{
                const response = await fetch(myUrl);
                const data = await response.json();
                console.log("API Response:", data);
                displaySpotlights(data);
            }
            catch (error){
                console.error("Error loading members:", error)
            }
        }
        loadSpotlight()


        function displaySpotlights(members){
            const spotlightContainer = document.getElementById("spotlights");

            spotlightContainer.innerHTML ="";
            const spotlightMembers = members.filter(member => member.level === 2 || member.level === 3
            );
    
            const shuffled = spotlightMembers.sort(()=> 0.5 - Math.random());
            const count = Math.floor(Math.random()*2) +2;
            
            //Takes two or three after shuffle
            const selected = shuffled.slice(0,count);
            selected.forEach(member => {
                let selectCard = `<section class="grid-member" id="spot-section">
                <div class="top">
                <h2>${member.name}</h2>
                <p id="mem-description"> ${member.description}</p>
                </div>
                <img src="${member.image}"
                     alt="${member.name}"
                     width ="340"
                     height = "440"
                     loading="lazy">
                <div class = "info">
                <p><strong>Phone: </strong> ${member.phone}</p>
                <p><strong>Visit Website:</strong> ${member.website}</p>
                <p id="mem-level"><strong>Membership:</strong> ${getLevel(member.level)}</p>
                </div>
                 </section>`; 
                spotlightContainer.innerHTML += selectCard;
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

    };
})
