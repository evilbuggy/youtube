const fs = require('fs');
const {google} = require('googleapis');
const processChannelsResponse = require('./../processChannelsResponse');

var searchChannelsByQuery = function(apiKey, queryString, callBack){
    var params = {
        'maxResults' : '50',
        'part' : 'snippet',
        'q' : queryString,
        'type' : 'channel',
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
            callBack(null, processChannelsResponse(response.data));
        }
    });
};

module.exports = searchChannelsByQuery;
