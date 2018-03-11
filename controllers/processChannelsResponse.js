var processChannel = function(channelItem){
    return {
        channelId : channelItem.id.channelId,
        channelTitle : channelItem.snippet.title,
        thumbnails : channelItem.snippet.thumbnails,
    };
};

var isChannel = function(channelItem){
    if(channelItem.id.kind === "youtube#channel"){
        return true;
    }else{
        return false;
    }
}

var processChannelsResponse = function(channelsResponse){
    return{
        nextPageToken : channelsResponse.nextPageToken,
        prevPageToken : channelsResponse.prevPageToken,
        channelArr : channelsResponse.items.filter(isChannel).map(processChannel),
    };
};

module.exports = processChannelsResponse;
