var submitButton = document.querySelector(".submitIcon");
var prevPageBtn = document.querySelector("#prevPage");
var nextPageBtn = document.querySelector("#nextPage");

submitButton.addEventListener('click', function(event){
    event.preventDefault();
    var queryString = document.querySelector(".searchBar").value;
    window.location.href = "./searchVideos?queryToken=&queryString=" + queryString;
});

if(prevPageBtn !== null && prevPageBtn !== undefined){
    var queryTokenPrev = document.querySelector("#prevPageToken").innerHTML;
    if(queryTokenPrev !== ""){
        prevPageBtn.addEventListener('click', function(event){
            event.preventDefault();
            var queryString = document.querySelector("#presentQuery").innerHTML;
            window.location.href = "./searchVideos?queryToken=" + queryTokenPrev + "&queryString=" + queryString;
        });
    }
}

if(nextPageBtn !== null && nextPageBtn !== undefined){
    var queryTokenNext = document.querySelector("#nextPageToken").innerHTML;
    if(queryTokenNext !== ""){
        nextPageBtn.addEventListener('click', function(event){
            event.preventDefault();
            var queryString = document.querySelector("#presentQuery").innerHTML;
            window.location.href = "./searchVideos?queryToken=" + queryTokenNext + "&queryString=" + queryString;
        });
    }
}
