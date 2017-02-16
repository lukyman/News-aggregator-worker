
/*
module.exports = function () {
	var NodeCache = require('node-cache');
	var util = require("util");
	
	function Cache() {

		//if (!(this instanceof Cache)) return new Cache();

		if (SingletonInstance) {
			return SingletonInstance;
		}
		var SingletonInstance = this;
		NodeCache.call(this)

	}

	util.inherits(Cache, NodeCache);

	Cache.prototype.setCache = function setCache(key, data, time) {

		this.set(key, data, time, function (err, result) {
			if (err) {
				console.log(err)
			} else {
				console.log("cache set ", result)
			}

		})
	}

	Cache.prototype.getCache = function getCache(key,clb) {
		this.get(key, function (err, data) {
			if (data) {
				//console.log('data', data);
				clb(null,data)
			} else {
				clb(err,null)
			}
		})
	}
	Cache.prototype.deleteCache = function deleteCache(key) {
		this.del(key);
	}




//var resource = require('./resource');


	return new Cache();
} ();

*/