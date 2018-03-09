var processChannel = function(channelItem){
    return {
        channelId : channelItem.id.channelId,
        channelTitle : channelItem.snippet.title,
        thumbnails : channelItem.snippet.thumbnails,
    };
};

var processChannelsResponse = function(channelsResponse){
    return{
        nextPageToken : channelsResponse.nextPageToken,
        prevPageToken : channelsResponse.prevPageToken,
        channelArr : channelsResponse.items.map(processChannel),
    };
};

module.exports = processChannelsResponse;
