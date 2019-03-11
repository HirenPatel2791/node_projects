var admin = require("firebase-admin");
require('dotenv').config();
var serviceAccount = require('./message-center-f10bf-3061318bf10c.json');

//base
var databaseService = {};

if(!admin.apps.length) {
  admin.initializeApp({
    credential : admin.credential.cert(serviceAccount),
      databaseURL: process.env.DATABASE_URL
  });
}

var db = admin.database();

databaseService.getData = (id) => {
  var dCouponIdHash =  new Buffer(id).toString('base64');
  var ref = db.ref("notification/"+dCouponIdHash);
  return new Promise( function(resolve, reject) {
    ref.once("value", function(snapshot) {
      var res = snapshot.val();
  //    console.log(res);
      if(res !== null && res !== undefined) {
        return resolve(res);
      } else {
        //logger.error("Token Retrive error: ",snapshot);
        return reject(snapshot);
      }

    });
  });
};

module.exports = databaseService;
