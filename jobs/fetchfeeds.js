var parseString = require('xml2js').parseString;
//var request = require('request');
var feedrequest = require('../lib/feedrequest');
//var localcache = require('./localcache');
//var NodeCache = require('node-cache');
//var Cache = new NodeCache();
var rssendpoint = require('../model/rssendpoints');
var feedsort = require('../lib/feedsort');
var feedsEvents = require('./feedsEvents');


var feedskey = Object.keys(rssendpoint)




exports.fetchFeeds = function (agenda) {
    var fetchjob = this.fetch;

    agenda.define('http_request_feeds', function (job, done) {
        console.log("call fetchFeeds")
        fetchjob(rssendpoint, function (err, success) {
            if (err) {
                console.log(err)
            } else {
                console.log("done fetchFeeds",success)
                done();
            }
        });

         done();
    });
}

exports.fetch = function (rssendpoints, callback) {
    var feedsObject = [];

    console.log("entered fetchFeeds")
    for (var feedkey = 0; feedkey < feedskey.length; feedkey++) {

        var feedObjectByType = [];
        var currentFeedObject = rssendpoints[feedskey[feedkey]]


        var cur = 0;



        (function () {
            // console.log(feedskey[feedkey],"--starts")


            var request = new feedrequest(feedskey[feedkey], currentFeedObject);
            var key = feedskey[feedkey];
            request.request(function (err, success) {
                if (err) {
                    console.log(err)
                } else if (success) {

                    feedsEvents.emitFeedsFetched({
                        "feedkey": key, "data": success
                    });
                }


            });



        })(feedkey)



    }

    if (feedkey == feedskey.length) {
        console.log(feedkey, feedskey.length)

        callback(null, true);
    }

}



