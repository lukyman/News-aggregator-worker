var httprequest = require('request');
var parseString = require('xml2js').parseString;
module.exports = Feedrequest;

// this shit should start with cappital letter--no other option
function Feedrequest(feedkey, feedobject) {
    this.feedobject = feedobject;
    this.feedkey = feedkey;
    this.objectSize = Object.keys(feedobject).length;
    this.fetchedfeed = [];
    // console.log(feedobject)

}

Feedrequest.prototype.request = function (callback) {


    for (var i in this.feedobject) {

        var cur = 0;
        (function (index, url, fetchedfeed, objectSize, category) {

            httprequest(url, { trim: true }, function (err, success) {

                cur++;


                if (err) {

                    //console.log(err);
                    callback(err, null);

                } else if (success) {

                    

                    parseString(success.body, function (err, body) {
                        if (err) {
                           // console.log("errorr here!", err);
                        } else {

                            if (body != undefined) {
                                body["sourcename"] = index;
                               
                                fetchedfeed.push([body]);
                               

                            }
                        }

                    })


                }
               
                if (cur == objectSize) {
                     // console.log(fetchedfeed.length)
//                   // console.log("cur", cur, "objectSize", objectSize, "category", category, "media", index)
                    callback(null, fetchedfeed);
                }

            })
        })(i, this.feedobject[i], this.fetchedfeed, this.objectSize, this.feedkey)
    }
}