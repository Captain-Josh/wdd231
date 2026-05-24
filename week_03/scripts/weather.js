const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = "https://api.openweathermap.org/data/2.5/weather?lat=50.07&lon=10.16&units=metric&appid=a7422f79e404e66bc3f7ab633ce2a092";

async function apiFetch(){
    try{
        const response = await fetch(url);
        if (response.ok){
            const data = await response.json();
            console.log(data);
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
    currentTemp.innerHTML =`
    ${data.main.temp.toFixed(1)}&deg;F`;

    const description = data.weather[0].description;
    captionDesc.textContent = description;

    const icon =data.weather[0].icon;
    const iconSrc = `https://openweathermap.org/img/wn/${icon}@2x.png`;
     
  weatherIcon.setAttribute("src", iconSrc);
  weatherIcon.setAttribute('alt', description);
 
}