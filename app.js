const express = require('express');
const fs = require('fs');
const ejs = require('ejs');
const searchVideos =require('./controllers/searchVideos');
const searchChannels =require('./controllers/searchChannels');
const searchTrending =require('./controllers/searchTrending');
const readAPIkey = require('./readAPIkey');

var app = express();
var apiKey = "", countryCodes = null;

app.set('view engine', 'ejs');
app.use('/public', express.static('public'));

app.get('/',  function(request, response){
    response.sendFile(__dirname + '/views/index.html');
});

app.get('/searchVideos', function(request, resp){
    var queryString = request.query.queryString;
    var queryToken = request.query.queryToken;
    if(queryToken === undefined && queryString === undefined){
        resp.render('searchVideos', {response : null, queryString : null, queryToken : null});
    }else{
        if(apiKey === ""){
            readAPIkey(function(error, key){
                if(error){
                    resp.sendFile(__dirname + '/views/internalError.html');
                }else{
                    apiKey = key;
                    if(queryToken === ""){
                        searchVideos.searchVideosByQuery(apiKey, queryString, function(err, response){
                            if(err){
                                resp.sendFile(__dirname +  "/views/404.html");
                            }else{
                                resp.render('searchVideos', {response : response, queryString : queryString, queryToken : ""});
                            }
                        });
                    }else{
                        searchVideos.searchVideosByToken(apiKey, queryString, queryToken, function(err, response){
                            if(err){
                                resp.sendFile(__dirname +  "/views/404.html");
                            }else{
                                resp.render('searchVideos', {response : response, queryString : queryString, queryToken : queryToken});
                            }
                        });
                    }
                }
            });
        }else{
            if(queryToken === ""){
                searchVideos.searchVideosByQuery(apiKey, queryString, function(err, response){
                    if(err){
                        resp.sendFile(__dirname +  "/views/404.html");
                    }else{
                        resp.render('searchVideos', {response : response, queryString : queryString, queryToken : ""});
                    }
                });
            }else{
                searchVideos.searchVideosByToken(apiKey, queryString, queryToken, function(err, response){
                    if(err){
                        resp.sendFile(__dirname +  "/views/404.html");
                    }else{
                        resp.render('searchVideos', {response : response, queryString : queryString, queryToken : queryToken});
                    }
                });
            }
        }
    }
});

app.get('/searchChannels', function(request, resp){
    var queryString = request.query.queryString;
    var queryToken = request.query.queryToken;
    if(queryToken === undefined && queryString === undefined){
        resp.render('searchChannels', {response : null, queryString : null, queryToken : null});
    }else{
        if(apiKey === ""){
            readAPIkey(function(error, key){
                if(error){
                    resp.sendFile(__dirname + '/views/internalError.html');
                }else{
                    apiKey = key;
                    if(queryToken === ""){
                        searchChannels.searchChannelsByQuery(apiKey, queryString, function(err, response){
                            if(err){
                                resp.sendFile(__dirname +  "/views/404.html");
                            }else{
                                resp.render('searchChannels', {response : response, queryString : queryString, queryToken : ""});
                            }
                        });
                    }else{
                        searchChannels.searchChannelsByToken(apiKey, queryString, queryToken, function(err, response){
                            if(err){
                                resp.sendFile(__dirname +  "/views/404.html");
                            }else{
                                resp.render('searchChannels', {response : response, queryString : queryString, queryToken : queryToken});
                            }
                        });
                    }
                }
            });
        }else{
            if(queryToken === ""){
                searchChannels.searchChannelsByQuery(apiKey, queryString, function(err, response){
                    if(err){
                        resp.sendFile(__dirname +  "/views/404.html");
                    }else{
                        resp.render('searchChannels', {response : response, queryString : queryString, queryToken : ""});
                    }
                });
            }else{
                searchChannels.searchChannelsByToken(apiKey, queryString, queryToken, function(err, response){
                    if(err){
                        resp.sendFile(__dirname +  "/views/404.html");
                    }else{
                        resp.render('searchChannels', {response : response, queryString : queryString, queryToken : queryToken});
                    }
                });
            }
        }
    }
});

app.get('/trendingVideos', function(request, resp){
    var regionCode = request.query.regionCode;
    var queryToken = request.query.queryToken;
    if(countryCodes === null){
        countryCodes = fs.readFileSync("./countryCodes.json");
        countryCodes = JSON.parse(countryCodes);
    }
    if(queryToken === undefined && regionCode === undefined){
        resp.render('trendingVideos', {response : null, regionCode : null, queryToken : null, countryCodes : countryCodes});
    }else{
        if(apiKey === ""){
            readAPIkey(function(error, key){
                if(error){
                    resp.sendFile(__dirname + '/views/internalError.html');
                }else{
                    apiKey = key;
                    if(queryToken === ""){
                        searchTrending.searchTrendingByQuery(apiKey, regionCode, function(err, response){
                            if(err){
                                resp.sendFile(__dirname +  "/views/404.html");
                            }else{
                                resp.render('trendingVideos', {response : response, regionCode : regionCode, queryToken : "", countryCodes : countryCodes});
                            }
                        });
                    }else{
                        searchTrending.searchTrendingByToken(apiKey, regionCode, queryToken, function(err, response){
                            if(err){
                                resp.sendFile(__dirname +  "/views/404.html");
                            }else{
                                resp.render('trendingVideos', {response : response, regionCode : regionCode, queryToken : queryToken, countryCodes : countryCodes});
                            }
                        });
                    }
                }
            });
        }else{
            if(queryToken === ""){
                searchTrending.searchTrendingByQuery(apiKey, regionCode, function(err, response){
                    if(err){
                        resp.sendFile(__dirname +  "/views/404.html");
                    }else{
                        resp.render('trendingVideos', {response : response, regionCode : regionCode, queryToken : "", countryCodes : countryCodes});
                    }
                });
            }else{
                searchTrending.searchTrendingByToken(apiKey, regionCode, queryToken, function(err, response){
                    if(err){
                        resp.sendFile(__dirname +  "/views/404.html");
                    }else{
                        resp.render('trendingVideos', {response : response, regionCode : regionCode, queryToken : queryToken, countryCodes : countryCodes});
                    }
                });
            }
        }
    }
});

app.get('*', function(request, response){
    response.sendFile(__dirname + "/views/404.html");
});

app.listen(8000, "192.168.31.209");
