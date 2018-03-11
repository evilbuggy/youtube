var processVideo = function(videoItem){
    return {
        videoId : videoItem.id.videoId || videoItem.id,
        title : videoItem.snippet.title,
        channelTitle : videoItem.snippet.channelTitle,
        channelId : videoItem.snippet.channelId,
        thumbnails : videoItem.snippet.thumbnails,
    };
};

var isVideo = function(videoItem){
    if(videoItem.kind === "youtube#video" || videoItem.id.kind === "youtube#video"){
        return true;
    }else {
        return false;
    }
}

var processVideosResponse = function(videosResponse){
    return{
        nextPageToken : videosResponse.nextPageToken,
        prevPageToken : videosResponse.prevPageToken,
        videoArr : videosResponse.items.filter(isVideo).map(processVideo),
    };
};

module.exports = processVideosResponse;
