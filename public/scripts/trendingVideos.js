$(document).ready(function(){
    $("#backToHome").click(function(){
        window.location.href = "./";
    });

    $(".submitIcon").click(function(event){
        event.preventDefault();
        window.location.href = "./trendingVideos?queryToken=&regionCode=" + $(".searchBox")[0].value;
    });
    if($("#prevPage").length !== 0){
        var queryTokenPrev = $("#prevPageToken")[0].innerHTML;
        if(queryTokenPrev !== ""){
            $("#prevPage").css("color", "white");
            $("#prevPage").css("cursor", "pointer");
            $("#prevPage").click(function(event){
                event.preventDefault();
                window.location.href = "./trendingVideos?queryToken=" +  queryTokenPrev + "&regionCode=" + $("#presentQuery")[0].innerHTML;
            });
            $("#prevPage").mouseenter(function(){
                $("#prevPage").css("color", "rgba(255,255,255,0.5)");
            });
            $("#prevPage").mouseleave(function(){
                $("#prevPage").css("color", "white");
            });
        }else{
            $("#prevPage").css("color", "rgba(255,255,255,0.5)");
        }
    }

    if($("#nextPage").length !== 0){
        var queryTokenNext = $("#nextPageToken")[0].innerHTML;
        if(queryTokenNext !== ""){
            $("#nextPage").css({"color":"white", "cursor":"pointer"});
            $("#nextPage").click(function(event){
                event.preventDefault();
                window.location.href = "./trendingVideos?queryToken=" +  queryTokenNext + "&regionCode=" + $("#presentQuery")[0].innerHTML;
            });
            $("#nextPage").mouseenter(function(){
                $("#nextPage").css("color", "rgba(255,255,255,0.5)");
            });
            $("#nextPage").mouseleave(function(){
                $("#nextPage").css("color", "white");
            });
        }else{
            $("#nextPage").css("color", "rgba(255,255,255,0.5)");
        }
    }
});
