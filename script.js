function getWeather() {
    var city = document.getElementById('cityInput').value;
    var apiKey = 'dfee301045db0007def50c72d6211d38';
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        if (data.cod != "404") {
            var temperature = data.main.temp;
            var humidity = data.main.humidity;
            var description = data.weather[0].description;

            var weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `
                <h2>Weather in ${city}:</h2>
                <p>Temperature: ${temperature} K</p>
                <p>Humidity: ${humidity}%</p>
                <p>Description: ${description}</p>
            `;
        } else {
            var weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<p>City not found or API key is invalid.</p>`;
        }
    })
    .catch(error => console.error('Error:', error));
}
