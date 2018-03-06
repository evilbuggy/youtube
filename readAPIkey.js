const fs = require('fs');

var readAPIkey = function(callBack){
    fs.readFile('APIkey.json', function(error, response){
        if(error){
            console.log("Error obtaining API key...");
            callBack(error, response);
        }else{
            console.log("Successfully obtained API key...");
            callBack(error, JSON.parse(response).API);
        }
    });
};

module.exports = readAPIkey;
