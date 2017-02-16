var feedsort = require('../lib/feedsort');
var feedsEvents = require("../jobs/feedsEvents");
var Cache = require("../model/Cache");
var rssmodel = require('../model/rssmodel');
exports.sortfeeds = function (feedsobject,feedkey, callback) {
 feedsort.sort(feedsobject,feedkey, function (err, success) {
   if (!err) {
     //console.log(success)
     var sorted = feedsort.sortbydate(success);
     callback(null,sorted);
   } 
  })
  
}

//listen to feedsfetched event and set Cache
feedsEvents.on("feedsfetched", function (key, data) {
  console.log("manjet")
  console.log(key)
 // Cache.deleteCache(key);
  //Cache.setCache(key, data, "2.4e+6");
 rssmodel.insertManyRss(key, data);
 
 
})
