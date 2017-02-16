var Jobs = require('./jobs/agendaConfig');
var feedssort = require('./jobs/sortfeeds');
const http = require('http');
const port = 5000;


Jobs.setupJobs();

http.createServer(function (req, res) {
    
}).listen(port,"107.170.18.192");

