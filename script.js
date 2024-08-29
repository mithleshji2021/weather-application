const input = document.querySelector("#input");
const searchIcon = document.querySelector("#searchicon");
const WheatherImage = document.querySelector("#image");
const temperature = document.querySelector("#temperature");
const city = document.querySelector("#city");
const country = document.querySelector("#country");
const windSpeed = document.querySelector("#windspeed");
const errorCity = document.querySelector("#error-city");
const humidity = document.querySelector("#humidity");
const temperatureDetail = document.querySelector("#temprature-detail");
const wheatherType = document.querySelector("#weather-type");

const key = "e06739a9f36f5f38b4c405e2f63b426d"
temperatureDetail.classList.add('hidden');
errorCity.classList.add('hidden'); 

input.addEventListener("keyup", async (event) => {
    if (input.value.length > 0 && event.key === "Enter") {
        const inputValue = input.value;
        
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${key}&units=metric`);
            const data = await response.json(); // Await here to correctly parse the response
            
            if(data.cod == "404"){
                errorCity.classList.remove('hidden'); 
                temperatureDetail.classList.add('hidden');
            }else{

                console.log(data);
                errorCity.classList.add('hidden');
                temperature.innerHTML = `${(Math.floor(data.main.temp))}°C`;
                city.innerHTML = `${data.name}`
                windSpeed.innerHTML = `${(Math.floor(data.wind.speed))} Km/h`
                humidity.innerHTML = `${data.main.humidity}%`

                temperatureDetail.classList.remove('hidden');  
            //    wheatherType.innerHTML = `${data.main}`
           
            }
            

        } catch (error) {
            console.log( error);
        }

        input.value = ""; // Clear the input after processing
    }
});

searchIcon.addEventListener("click",async ()=>{

    if(input.value.length > 0 ){
        const inputValue = input.value;

        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${key}&units=metric`);
            const data = await response.json(); // Await here to correctly parse the response
            
            if(data.cod == "404"){
                errorCity.classList.remove('hidden'); 

            }else{

                console.log(data);
                errorCity.classList.add('hidden');
                temperature.innerHTML = `${(Math.floor(data.main.temp))}°C`;
                city.innerHTML = `${data.name}`
                windSpeed.innerHTML = `${(Math.floor(data.wind.speed))} Km/h`
                humidity.innerHTML = `${data.main.humidity}%`

                temperatureDetail.classList.remove('hidden');  
               wheatherType.innerHTML = `${data.weather[0].
                    description}`
            }
            

        } catch (error) {
            console.log( error);
        }

        input.value = ""; // Clear the input after processing
    }

    
});