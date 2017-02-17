var Jobs = require('./jobs/agendaConfig');
var feedssort = require('./jobs/sortfeeds');
const http = require('http');
const port = 3001;


Jobs.setupJobs();

http.createServer(function (req, res) {
    
}).listen(port);

