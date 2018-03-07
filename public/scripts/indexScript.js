var searchVideosBtn = document.querySelector(".searchVideos");
var trendingVideosBtn = document.querySelector(".trendingVideos");
var viewAnalyticsBtn = document.querySelector(".viewAnalytics");

searchVideosBtn.addEventListener('click', function(){
    window.location.href = "/searchVideos";
});

trendingVideosBtn.addEventListener('click', function(){
    window.location.href = "/trendingVideos";
});

viewAnalyticsBtn.addEventListener('click', function(){
    window.location.href = "/viewAnalytics";
});
