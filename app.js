var Jobs = require('./jobs/agendaConfig');
var feedssort = require('./jobs/sortfeeds');
const http = require('http');
const port = 3030;


Jobs.setupJobs();

http.createServer().listen(port);

