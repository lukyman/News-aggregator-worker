var extractor = require('./extractor');
var dataExtractor = require('unfluff');
var cheerio = require('cheerio');
var request = require("request");




exports.sort = function (unsortedObject,fk, callback) {
	var globalObject = [];
	globalObject.length = 0;
	var extractedObject = [];
	extractedObject.length = 0;
	var totalSize = 0, cur = 0;
	var allitems = [];
	for (var i = 0; i < unsortedObject.length; i++) {
	
		var rootChannel = unsortedObject[i][0].rss.channel[0]; //| unsortedObject[i][0].rss.channel;
		//console.log( fk,rootChannel.title)	
	var rootItems = rootChannel.item;
	var meta ={};

	rootItems.forEach(function (value, key) {
	
		var newvalue = value;
		meta["title"]=rootChannel.title[0];
		meta["link"]= rootChannel.link[0];

	if(rootChannel.image) meta['source_image'] = rootChannel.image[0].url[0];

	if (value['media:content']) {
		var imageUrl = value['media:content'][0].$.url;
		if (imageUrl.indexOf('.jpeg') > 0) {
			var url = imageUrl.substring(0, imageUrl.indexOf('.jpeg')) + '.jpeg'
			newvalue["media_image"] = url;
		} else if (imageUrl.indexOf('.jpg') > 0) {
			var url = imageUrl.substring(0, imageUrl.indexOf('.jpg')) + '.jpg'
			newvalue["media_image"] = url;
		} else if (imageUrl.indexOf('.png') > 0) {
			var url = imageUrl.substring(0, imageUrl.indexOf('.png')) + '.png'
			newvalue["media_image"] = url;
		} else {
			newvalue["media_image"] = "";
		}
	}
		
		newvalue["meta"]=meta;

		globalObject.push(newvalue);
	
		 
})
	

	if (i == (unsortedObject.length - 1)) {
	
		allitems = globalObject;
		
	// console.log(i,unsortedObject.length - 1,allitems.length,fk)	
	}
		
} 
	
	totalSize = allitems.length;
	
		
		(function(allitems, totalSize){
			cur = 0;
			//globalObject.length = 0;
		allitems.forEach(function (value, key) {
	
			(function (allitems) {
				
				request.get(value['link'][0], function (err, res, body) {
					cur++;
					value['linkid'] = value['link'][0];	
				if (!err) {
					
					(function (body) {
					var newvalue = value;
					$ = cheerio.load(body);
					var data = dataExtractor($.html(), 'en');
											
				//	newvalue["media_image"] = data.image;
					if (data.image) {
						var imageUrl = data.image;
						if (imageUrl.indexOf('.jpeg') > 0) {
							var url = imageUrl.substring(0, imageUrl.indexOf('.jpeg')) + '.jpeg'
							newvalue["media_image"] = url;
						} else if (imageUrl.indexOf('.jpg') > 0) {
							var url = imageUrl.substring(0, imageUrl.indexOf('.jpg')) + '.jpg'
							newvalue["media_image"] = url;
						} else if (imageUrl.indexOf('.png') > 0) {
							var url = imageUrl.substring(0, imageUrl.indexOf('.png')) + '.png'
							newvalue["media_image"] = url;
						} else {
							newvalue["media_image"] = "";
						}
					}	
	
					//if (rootChannel.image) meta['source_image'] = rootChannel.image[0].url[0];

					//newvalue["meta"] = meta;
					extractedObject.push(newvalue);
					//console.log(totalSize, cur, fk)
					
					
					
					})(body)	

					
				}
				if (totalSize  == cur) {
						//console.log(totalSize , cur)
				
						callback(null, extractedObject);
					}	
							
				})
				
			})(totalSize)
						
					  
		})
		
			/*var _extractor = new extractor(rootItems);
			_extractor.extractMetaData(function (err, success) {
						cur++;
		
				if (!err) {
					console.log("cur",cur,"--",unsortedObject.length,fk)
					if (cur == unsortedObject.length) {
						callback(null,success)
					}
					
				}
			})*/
			

		})(allitems,totalSize)
	
}

exports.sortbydate = function (object) {
	var object2 = object;
	var date = new Date();
	return object2.sort(function (a, b) {
		return (new Date(b.pubDate[0])) - (new Date(a.pubDate[0]))
	})
}