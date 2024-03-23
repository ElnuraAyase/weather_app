const axios = require('axios');

// API key for OpenWeatherMap API (get your own key from https://openweathermap.org/)
const apiKey = 'YOUR_API_KEY';

// Function to fetch weather data based on city name
async function getWeather(city) {
    try {
        // Make GET request to OpenWeatherMap API
        const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);

        // Extract relevant weather data
        const weatherData = response.data;
        const cityName = weatherData.name;
        const temperature = weatherData.main.temp;
        const description = weatherData.weather[0].description;

        // Print weather information to the console
        console.log(`Current weather in ${cityName}:`);
        console.log(`Temperature: ${temperature}°C`);
        console.log(`Description: ${description}`);
    } catch (error) {
        // Handle any errors
        console.error('Error fetching weather data:', error.response.data.message);
    }
}

// Usage: node weather.js <city>
const city = process.argv[2];
if (!city) {
    console.error('Please provide a city name as an argument.');
} else {
    getWeather(city);
}

