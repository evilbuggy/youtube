var submitButton = document.querySelector(".submitIcon");
var prevPageBtn = document.querySelector("#prevPage");
var nextPageBtn = document.querySelector("#nextPage");

submitButton.addEventListener('click', function(event){
    event.preventDefault();
    var regionCode = document.querySelector(".searchBox").value;
    window.location.href = "./trendingVideos?queryToken=&regionCode=" + regionCode;
});

if(prevPageBtn != null && prevPageBtn != undefined){
    var queryTokenPrev = document.querySelector("#prevPageToken").innerHTML;
    if(queryTokenPrev != null){
        prevPageBtn.addEventListener('click', function(event){
            event.preventDefault();
            var regionCode = document.querySelector("#presentQuery").innerHTML;
            window.location.href = "./trendingVideos?queryToken=" + queryTokenPrev + "&regionCode=" + regionCode;
        });
    }
}

if(nextPageBtn != null && nextPageBtn != undefined){
    var queryTokenNext = document.querySelector("#nextPageToken").innerHTML;
    if(queryTokenNext != null){
        nextPageBtn.addEventListener('click', function(event){
            event.preventDefault();
            var regionCode = document.querySelector("#presentQuery").innerHTML;
            window.location.href = "./trendingVideos?queryToken=" + queryTokenNext + "&regionCode=" + regionCode;
        });
    }
}
