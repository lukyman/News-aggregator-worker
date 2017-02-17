
var _schema = require('./schema');
var mongoose = require('mongoose');

   var mongoHost =  'localhost',
        mongoPort = '27017',
        mongoCfg = 'mongodb://' + mongoHost + ':' + mongoPort + '/rssdb';
 

mongoose.connect(mongoCfg, {
    server: {
        socketOptions: {
            socketTimeoutMS: 0,
          connectionTimeout: 0
        }
    }
});

mongoose.connection.on("error",console.log.bind(console,"connect error"));

   exports.insertManyRss =function (modelname, data) {
 
       mongoose.model(modelname, _schema.rssFeedsSchema).insertMany(data,{ordered:false} , function (err, success) {
           if (err) {
               // console.log(err)
           } else {
               console.log("success")
            }
        });
 
}    
exports.getFeeds = function(modelname,clb){
 mongoose.model(modelname,_schema.rssFeedsSchema).find({}).limit(50).exec(function(err,success){
    if(!err){
        clb(null)
    } else {
        console.log(success.length)
        clb(null,success)
    }
});
}