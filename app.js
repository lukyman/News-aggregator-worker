var Jobs = require('./jobs/agendaConfig');
var feedssort = require('./jobs/sortfeeds');
const http = require('http');
const port = 8080;


Jobs.setupJobs();

http.createServer().listen(port);

