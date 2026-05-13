const url = "https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json"
const cards = document.querySelector("#cards")

const getProphetData = async()=>{
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.prophets)
    displayProphet(data.prophets)
}

getProphetData()

function displayProphet(prophets){
    cards.innerHTML ="";
    prophets.forEach(prophet => {
        let prophetCard = `<section>
            <h2>${prophet.name} ${prophet.lastname}</h2>
            <p>Date of Birth: ${prophet.birthdate}</p>
            <p>place of birth: ${prophet.birthplace}</p>
            <img src="${prophet.imageurl}"
                 alt="${prophet.name}"
                 width ="340"
                 height = "440"
                 loading="lazy">
         </section>`; 
        cards.innerHTML += prophetCard;
    });

}