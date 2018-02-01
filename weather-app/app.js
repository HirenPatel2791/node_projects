// const yargs = require('yargs');
// const geocode = require('./geocode/geocode.js')
//
// const argv = yargs
//   .options({
//     a: {
//       demand:true,
//       alias:'address',
//       describe: 'Address to fetch weather for',
//       string: true
//     }
//   })
//   .help()
//   .alias('help','h')
//   .argv;
//
//
// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//   if (errorMessage) {
//     console.log(errorMessage);
//   } else {
//     console.log(JSON.stringify(results, undefined, 2));
//   }
// });
// console.log();
//
//
//  //https://api.darksky.net/forecast/218946c4499bb6101f44ad957e5420cf/37.8267,-122.4233

const request = require('request');

request({
  url:'https://api.darksky.net/forecast/218946c4499bb6101f44ad957e5420cf/37.8267,-122.4233',
  json:true
}, (error, response, body) => {
  if(error) {
    console.log('unable to connect to forecast.io servers');
  } else if (response.statuscode === 400) {
    console.log('Unable to fetch weather')
  } else if (response.statusCode === 200) {
    console.log(body.currently.temperature);
  }

}

);
