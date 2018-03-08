var backToHome = document.querySelector("#backToHome");

backToHome.addEventListener('click', function(){
    window.location.href = "./";
});

var prevPageToken = document.getElementById("prevPageToken");
var nextPageToken = document.getElementById("nextPageToken");
var prevPage = document.getElementById("prevPage");
var nextPage = document.getElementById("nextPage");

if(prevPage !== null){
    prevPage.style.color = "white";
}

if(nextPage !== null){
    nextPage.style.color = "white";
}

if(prevPageToken !== null && prevPageToken.innerHTML !== ""){
    prevPage.addEventListener('mouseenter', function(){
        prevPage.style.color = "rgba(255,255,255,0.5)";
        prevPage.style.cursor = "pointer";
    });
    prevPage.addEventListener('mouseleave', function(){
        prevPage.style.color = "white";
        prevPage.style.cursor = "default";
    });
}else if(prevPage !== null){
    prevPage.style.color = "rgba(255,255,255,0.5)";
}

if(nextPageToken !== null && nextPageToken.innerHTML !== ""){
    nextPage.addEventListener('mouseenter', function(){
        nextPage.style.color = "rgba(255,255,255,0.5)";
        nextPage.style.cursor = "pointer";
    });
    nextPage.addEventListener('mouseleave', function(){
        nextPage.style.color = "white";
        nextPage.style.cursor = "default";
    });
}else if(nextPage !== null){
    nextPage.style.color = "rgba(255,255,255,0.5)";
}
