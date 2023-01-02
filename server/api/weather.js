const axios = require ("axios");

require('dotenv').config({path: "./../../../.env"});
const baseurl = "http://api.openweathermap.org/data/2.5/weather";

class Weather {

    /**
     * Gets the weather data based on the zipcode and which temp system to converge to (imperial/metric system)
     *
     * @param {number} zipCode The zipcode used to get the weather info from the weather api
     * @param {string} tempMetric This is either "imperial" (use Fahrenheit) or "metric" (use Celsius)
     * @return {JSON} The data response from the weather api call.
     */

    getWeatherData = async (zipCode,tempMetric) => {

        let url = `${baseUrl}?zip=${zipCode},us&appid=${process.env.WEATHER_KEY}&units=${tempMetric}`;
        // Awaitable call to get the information from the weather api and then return the data.
        // TODO: Add error handling for this call
        return (await axios(url)).data;
    }
    
    
    
    
    
   




}
module.exports = Weather;
