
var fs = require("fs");
var csv = require('fast-csv');
var databaseService = require('./dbService');

var count = 0;
var newCount = 0;
var email_arr = [];

var csvStream = csv.format(),
    writableStream = fs.createWriteStream("firebase_all_users_EU_march_11_2019.csv");

writableStream.on("finish", function(){
  console.log("DONE!");
});

csvStream.pipe(writableStream);

var parser = csv
.fromPath("./dcoupon_all_users_EU_march_11_2019.csv")
.on("data", function(data){
  //console.log( count++ +" " + data);
  email_arr.push(data+"_EU");
})
.on("end", function(){
  console.log("done");
  console.log(email_arr.length);
  email_arr.forEach(function(element) {
    //console.log(element);
    databaseService.getData(element).then(function (res) {
      console.log( newCount++, " = ", element);
      csvStream.write({element});
    }).catch(function(error){

                //console.log("== Token not found");
            });
  });
});
