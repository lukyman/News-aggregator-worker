
var _schema = require('./schema');
var mongoose = require('mongoose');


   exports.insertManyRss =function (modelname, data) {
 
       mongoose.model(modelname, _schema.rssFeedsSchema)
           .insertMany(data, { ordered: false }, function (err, data) {
               if (err) {
                   console.log("err insertMany")
               } else {
                   console.log("success")
               }
           })
}    

