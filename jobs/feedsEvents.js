module.exports = function () {
    var util = require("util");
    var event = require("events").EventEmitter;
   
    var sortfeeds = require("./sortfeeds");
    var cache = require('../model/Cache');
      

    //var eventemitter = new event.EventEmitter();


    function FeedsEvent() {
        //if (!(this instanceof FeedsEvent)) return new FeedsEvent();
        if (Singleton_instance) {
            return Singleton_instance;
        }

        var Singleton_instance = this;
        event.call(this);
    }

    util.inherits(FeedsEvent, event);
    FeedsEvent.prototype.emitFeedsFetched = function emitFeedsFetched(object) {
        //  console.log("joooo", object["feedkey"])
        var feedkey = object['feedkey'], data = object['data'];

        var self = this;
       sortfeeds.sortfeeds(data,feedkey, function (err, success) {
           if (!err) {
               // console.log(feedkey,success)
               self.emit("feedsfetched", feedkey, success);
                 
            }      
        });

  
   
    }

    return new FeedsEvent();
} ();