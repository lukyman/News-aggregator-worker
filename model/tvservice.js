var resource = require('./resource');

module.exports={

	getTv:function(callback){

		var tv = resource['tv'];

		callback(tv);

		
	}
}