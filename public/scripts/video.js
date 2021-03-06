var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var imgList = document.querySelectorAll(".thumbnail");
var titleList = document.querySelectorAll(".videoTitle");
var channelList = document.querySelectorAll(".channelLink");
var closeBtn = document.querySelector("#close");

var numOfVids =  imgList.length;

var open = false, curPlayer = null, parNode = null;
var ready = false, num = 0;
var vidHei, vidWid;

var computeSize = function(){
    var winHei = $(window).height();
    var winWid = $(window).width();
    if(winHei > 850 && winWid > 1350){
        vidHei = 780;
        vidWid = 1280;
    }else if(winWid > 900){
        vidHei = 480;
        vidWid = 858;
    }else{
        vidHei = 360;
        vidWid = 640;
    }
}

var checkReady = function(){
    if(ready === true){
        document.getElementById("loading").style.display = "none";
        document.getElementById("wrapper").classList.remove("blur-filter");
    }else{
        setTimeout(checkReady, 2000);
    }
}

if(document.getElementById("blur") != undefined){
    document.getElementById("wrapper").classList.add("blur-filter");
    checkReady();
}

var incrementNum = function(){
    num += 1;
    if(num == numOfVids){
        ready = true;
    }
}

var toPointer = function(e){
    if(!open){
        var element = e.target;
        element.style.cursor = "pointer";
    }
}

var toDefault = function(e){
    if(!open){
        var element = e.target;
        element.style.cursor = "default";
    }
}

for(var i = 0; i < numOfVids; i++){
    channelList[i].addEventListener('click', function(event){
        if(!open){
            window.location.href = "./channel?channelId=" + event.target.id.substr(1);
        }
    });
}

for(var i = 0; i < numOfVids; i++){
    imgList[i].addEventListener('mouseenter', toPointer);
    imgList[i].addEventListener('mouseleave', toDefault);
    channelList[i].addEventListener('mouseenter', toPointer);
    channelList[i].addEventListener('mouseleave', toDefault);
    titleList[i].addEventListener('mouseenter', toPointer);
    titleList[i].addEventListener('mouseleave', toDefault);
}

var players = [];

computeSize();

var onYouTubeIframeAPIReady = function(){
    for(var i = 0; i < numOfVids; i++){
        var player = new YT.Player("v" + i, {
            height: vidHei,
            width:vidWid,
            videoId: imgList[i].classList[1].substr(1),
            events: {
                'onReady': incrementNum,
            }
        });
        players.push(player);
    }
}

var openVideo = function(event){
    if(!open && ready){
        open = true;
        closeBtn.style.display = "block";
        var videoId = event.target.classList[1];
        var imgElement = document.querySelector("." + videoId);
        var index = Array.prototype.indexOf.call(imgList, imgElement);
        curPlayer = players[index];
        var iframePlayer = curPlayer.getIframe();
        parNode = document.querySelector("#p"+index);
        parNode.style.top = "50%";
        document.getElementById("wrapper").classList.add("blur-filter");
    }
}

var closeVideo = function(){
    if(ready){
        closeBtn.style.display = "none";
        open = false;
        parNode.style.top = "-200%";
        curPlayer.stopVideo();
        document.getElementById("wrapper").classList.remove("blur-filter");
    }
}

if(closeBtn !== null){
    closeBtn.addEventListener('click', closeVideo);
}

for(var i = 0; i < numOfVids; i++){
    imgList[i].addEventListener('click', openVideo);
    titleList[i].addEventListener('click', openVideo);
}
