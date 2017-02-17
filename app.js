var http = require('http');
var Jobs = require('./jobs/agendaConfig');
var feedssort = require('./jobs/sortfeeds');
Jobs.setupJobs();
http.createServer(function (req, res) {
    
}).listen(8040,'127.0.0.1');

