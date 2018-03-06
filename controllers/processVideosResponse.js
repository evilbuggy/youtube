var processVideo = function(videoItem){
    return {
        videoId : videoItem.id.videoId,
        title : videoItem.snippet.title,
        channelTitle : videoItem.snippet.channelTitle,
        channelId : videoItem.snippet.channelId,
        thumbnails : videoItem.snippet.thumbnails,
    };
};

var processVideosResponse = function(videosResponse){
    return{
        nextPageToken : videosResponse.nextPageToken,
        prevPageToken : videosResponse.prevPageToken,
        videoArr : videosResponse.items.map(processVideo),
    };
};

module.exports = processVideosResponse;
