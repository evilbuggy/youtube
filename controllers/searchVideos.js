const fs =  require('fs');
const {google} = require('googleapis');
const searchVideosByQuery = require('./searchVideosByQuery');
const searchVideosByToken =  require('./searchVideosByToken');

module.exports.searchVideosByQuery = searchVideosByQuery;
module.exports.searchVideosByToken = searchVideosByToken;
