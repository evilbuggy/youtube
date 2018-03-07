const fs = require('fs');
const {google} = require('googleapis');
const processVideosResponse = require('./../processVideosResponse');

var searchVideosByToken = function(apiKey, queryString, queryToken, callBack){
    var params = {
        'maxResults' : '10',
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
            console.log("Error: API responded with an error...");
            callBack(error, response);
        }else{
            console.log("API responded to the query successfully...");
            callBack(null, processVideosResponse(response.data));
        }
    });
};

module.exports = searchVideosByToken;
