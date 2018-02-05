const yargs = require('yargs');
const geocode = require('./geocode/geocode.js');
const weather = require ('./weather/weather.js');

const argv = yargs
  .options({
    a: {
      demand:true,
      alias:'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help','h')
  .argv;


geocode.geocodeAddress(argv.address, (errorMessage, results) => {
  if (errorMessage) {
    console.log(errorMessage);
  } else {
    console.log(results.address);
    weather.getWeather(results.latitude,results.longitude,(errorMessage, weatherResults) => {
      if (errorMessage) {
           console.log(errorMessage);
         } else {
           //console.log(JSON.stringify(weatherResults, undefined, 2));
           //var currently = JSON.parse(results);
           console.log(`Current Temprature is ${weatherResults.temperature} but it feels like ${weatherResults.apparentTemperature}`)
         }
    });
  }
});
console.log();



//  //https://api.darksky.net/forecast/218946c4499bb6101f44ad957e5420cf/37.8267,-122.4233
