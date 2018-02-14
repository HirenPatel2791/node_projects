const yargs = require('yargs');
const axios = require('axios');

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

var encodedAddress = encodeURIComponent(argv.address);
var geocodeUrl = `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

axios.get(geocodeUrl).then((response) => {
  if(response.data.status === 'ZERO_RESULTS') {
    throw new Error('Unable to find that address');
  }
  //console.log(response.data);
  var lat = response.data.results[0].geometry.location.lat;
  var lng = response.data.results[0].geometry.location.lng;
  console.log(response.data.results[0].formatted_address);
  var weatherUrl = `https://api.darksky.net/forecast/218946c4499bb6101f44ad957e5420cf/${lat},${lng}`;
  return axios.get(weatherUrl);
  //console.log(response.data);
}).then((res) => {
  //console.log(res);
  var temperature = res.data.currently.temperature;
  var apparentTemperature = res.data.currently.apparentTemperature;
  console.log('temperature: ' + temperature + ' feels like: ' + apparentTemperature );
}).catch((e) => {
  if(e.code === 'ENOTFOUND') {
    console.log('Unable to connect to API Servers');
  } else {
    console.log(e.message);
  }
  //console.log(e);
});
