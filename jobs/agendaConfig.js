exports.setupJobs = function () {
  var fetchfeeds = require('./fetchfeeds');
   
    var Agenda = require('agenda');

   /* var mongoHost = process.env.MONGODB_HOST || 'localhost',
        mongoPort = process.env.MONGODB_PORT || '27017',
        mongoCfg = 'mongodb://' + mongoHost + ':' + mongoPort + '/agenda';
 */
   /*
  var mongo = require('mongodb'),
    Server = mongo.Server,
    Db = mongo.Db;
  
  var server = new Server('localhost', 27017, { auto_reconnect: true });
  var con = mongo.connect(mongoCfg, "agenda");    
  */
         mongoCfg = 'mongodb://127.0.0.1:27017/agenda';

     var agenda = new Agenda({ db: { address: mongoCfg } });
 
     fetchfeeds.fetchFeeds(agenda);   
       agenda.on('ready', function () {
           agenda.cancel({name: 'http_request_feeds'}, function(err, numRemoved) {});
            agenda.every('45 minutes', 'http_request_feeds');
            //agenda.stop();
        
             agenda.start();
       });
       
};