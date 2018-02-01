const request = require('request');




var geocodeAddress = (address, callback) => {
  var encodedAddress = encodeURIComponent(address);
      request({
        url:`http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
        json:true
      },  (error,response, body) => {
        //console.log(JSON.stringify(body, undefined, 2));
        if (error) {
          callback('Unable to connect to Google Servers');
        } else if (body.status === 'ZERO_RESULTS') {
          callback('Unable to find the address');
        } else if (body.status === 'OK') {
          callback(undefined, {
            address: body.results[0].formatted_address,
            latitude: body.results[0].geometry.location.lat,
            longitude: body.results[0].geometry.location.lng
          });
        }

  });
};
//218946c4499bb6101f44ad957e5420cf


module.exports.geocodeAddress = geocodeAddress;
