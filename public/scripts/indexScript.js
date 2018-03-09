var searchVideosBtn = document.querySelector(".searchVideos");
var trendingVideosBtn = document.querySelector(".trendingVideos");
var searchChannelsBtn = document.querySelector(".searchChannels");

searchVideosBtn.addEventListener('click', function(){
    window.location.href = "/searchVideos";
});

trendingVideosBtn.addEventListener('click', function(){
    window.location.href = "/trendingVideos";
});

searchChannelsBtn.addEventListener('click', function(){
    window.location.href = "/searchChannels";
});
