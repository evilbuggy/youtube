const fs = require('fs');
const {google} = require('googleapis');
const processVideosResponse = require('./../processVideosResponse');

var searchTrendingByToken = function(apiKey, region, queryToken, callBack){
    var params = {
        'maxResults' : '10',
        'regionCode' : region,
        'chart' : 'mostPopular',
        'part' : 'snippet',
        'pageToken' : queryToken,
    };
    var youtube = google.youtube({
        version : 'v3',
        auth : apiKey,
    });
    youtube.videos.list(params, function(error, response){
        if(error){
            console.log("Error: API responded with an error...");
            callBack(error, response);
        }else{
            console.log("API responded to the query successfully...");
            callBack(null, processVideosResponse(response.data));
        }
    });
};

module.exports = searchTrendingByToken;
