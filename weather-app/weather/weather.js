const request = require('request');

var getWeather = (lat,lng,callback) => {

  request({
    url:`https://api.darksky.net/forecast/218946c4499bb6101f44ad957e5420cf/${lat},${lng}`,
    json:true
  }, (error, response, body) => {
    if(error) {
      callback(error);
    } else if (response.statuscode === 400) {
      callback('Unable to fetch weather');
    } else if (response.statusCode === 200) {
      callback(undefined,{
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    }

  });

};

module.exports.getWeather = getWeather;
