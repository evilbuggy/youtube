$(document).ready(function(){
    $("#backToHome").click(function(){
        window.location.href = "./";
    });

    $(".submitIcon").click(function(event){
        event.preventDefault();
        window.location.href = "./searchChannels?queryToken=&queryString=" + $(".searchBar")[0].value;
    });

    if($("#prevPage") !== undefined){
        var queryTokenPrev = $("#prevPageToken")[0].innerHTML;
        if(queryTokenPrev !== ""){
            $("#prevPage").css("color", "white");
            $("#prevPage").css("cursor", "pointer");
            $("#prevPage").click(function(event){
                event.preventDefault();
                window.location.href = "./searchChannels?queryToken=" +  queryTokenPrev + "&queryString=" + $("#presentQuery")[0].innerHTML;
            });
            $("#prevPage").mouseenter(function(){
                $("#prevPage").css("color", "rgba(255,255,255,0.7)");
            });
            $("#prevPage").mouseleave(function(){
                $("#prevPage").css("color", "white");
            });
        }else{
            $("#prevPage").css("color", "rgba(255,255,255,0.7)");
        }
    }

    if($("#nextPage") !== undefined){
        var queryTokenNext = $("#nextPageToken")[0].innerHTML;
        if(queryTokenNext !== ""){
            $("#nextPage").css({"color":"white", "cursor":"pointer"});
            $("#nextPage").click(function(event){
                event.preventDefault();
                window.location.href = "./searchChannels?queryToken=" +  queryTokenNext + "&queryString=" + $("#presentQuery")[0].innerHTML;
            });
            $("#nextPage").mouseenter(function(){
                $("#nextPage").css("color", "rgba(255,255,255,0.7)");
            });
            $("#nextPage").mouseleave(function(){
                $("#nextPage").css("color", "white");
            });
        }else{
            $("#nextPage").css("color", "rgba(255,255,255,0.7)");
        }
    }

    $(".thumbnail").click(function(event){
        var channelId = event.target.classList[1];
        window.location.href = "https://www.youtube.com/channel/" + channelId.substr(1);
    });

    $(".channelTitle").click(function(event){
        var channelId = event.target.classList[1];
        window.location.href = "https://www.youtube.com/channel/" + channelId.substr(1);
    });
});
