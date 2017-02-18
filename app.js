var http = require('http');
var Jobs = require('./jobs/agendaConfig');
var feedssort = require('./jobs/sortfeeds');
var mongoose = require('mongoose');

   var mongoHost =  'localhost',
        mongoPort = '27017',
        mongoCfg = 'mongodb://' + mongoHost + ':' + mongoPort + '/rssdb';
   mongoose.connect(mongoCfg);
 
mongoose.connection.on("error",console.log.bind(console,"connect error"));

Jobs.setupJobs();
http.createServer(function (req, res) {
    
}).listen(8040,'127.0.0.1');

