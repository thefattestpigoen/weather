const express = require("express");
const Weather = require("./weather");
const router = express.Router();






router.get("/weather",async(req, res) => {

    let weather = new Weather();

    let weatherData = await weather.getWeatherData(98052."us");

    res.header("Content-Type",'application/json');

    res.send(JSON.stringify(weatherData, null, 4));

});

//POST request - dynamically get wather data based on request body

router.post("/weather", async(req,res) =>{
const{zipCode, tempMetric}= req.body;

let weather = new Weather();

let weatherData = await weather.getWeatherData(zipCode,tempMetric);

res.header("Content-Type",'application/json');

res.send(JSON.stringify(weatherData,null,4));



});

module.exports=router();
