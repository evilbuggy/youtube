const fs =  require('fs');
const {google} = require('googleapis');
const processVideosResponse = require('./processVideosResponse');

var getVideosByQuery = function(apiKey, queryString, callBack){
    var params = {
        'maxResults' : '50',
        'part' : 'snippet',
        'q' : queryString,
        'type' : 'video',
    };
    var youtube = google.youtube({
        version : 'v3',
        auth : apiKey,
    });
    youtube.search.list(params, function(error, response){
        if(error){
            console.log("Error: API responded with an error....");
            callBack(error, response);
        }else{
            console.log("API responded to the query successfully...");
            callBack(null, processVideosResponse(response.data));
        }
    });
};

var searchVideosByQuery = function(pathToAPI, queryString, callBack){
    fs.readFile(pathToAPI, function(error, response){
        if(error){
            console.log("Error: Error obtaining API key...");
            callBack(error, response);
        }else{
            console.log("API key successfully obtained...");
            var apiKey = JSON.parse(response).API;
            getVideosByQuery(apiKey, queryString, callBack);
        }
    });
};

var getVideosByToken = function(apiKey, queryString, queryToken, callBack){
    var params = {
        'maxResults' : '50',
        'part' : 'snippet',
        'q' : queryString,
        'pageToken' : queryToken,
        'type' : 'video',
    };
    var youtube = google.youtube({
        version : 'v3',
        auth : apiKey,
    });
    youtube.search.list(params, function(error, response){
        if(error){
            console.log("Error: API responded with an error....");
            callBack(error, response);
        }else{
            console.log("API responded to the token query successfully...");
            callBack(null, processVideosResponse(response.data));
        }
    });
};

var searchVideosByToken = function(pathToAPI, queryString, queryToken, callBack){
    fs.readFile(pathToAPI, function(error, response){
        if(error){
            console.log("Error:  Error obtaining API key...");
            callBack(error, response);
        }else{
            console.log("API key successfully obtained...");
            var apiKey = JSON.parse(response).API;
            getVideosByToken(apiKey, queryString, queryToken, callBack);
        }
    });
};

module.exports.searchVideosByQuery = searchVideosByQuery;
module.exports.searchVideosByToken = searchVideosByToken;
