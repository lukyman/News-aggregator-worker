var dataExtractor = require('unfluff');
var cheerio = require('cheerio');
var request = require("request");
module.exports=Extractor;

function Extractor(feedObject) {
    this.feedObject = feedObject;
    this.objectSize = feedObject.length;

    
}   

Extractor.prototype.extractMetaData = function (callback) {
    var globalObject = [];
    var objectSize = this.objectSize;
    cur = 0;
    this.feedObject.forEach(function (value, key) {
         
        
        meta = {};
			(function (link, feedObject,objectSize,globalObject) {
				
                request.get(link, function (err, res, body) {
                cur++;
				if (!err) {
					
		
					var newvalue = value;

					$ = cheerio.load(body);
					var data = dataExtractor($.html(), 'en');
											
					newvalue["media_image"] = data.image;
					
				
					//if (rootChannel.image) meta['source_image'] = rootChannel.image[0].url[0];

					//if(value['media:content']) newvalue["media_image"] =value['media:content'][0].$.url;

                    newvalue["meta"] = meta;
                  
                    globalObject.push(newvalue);
                  //  console.log(objectSize , cur)
                      if ( objectSize == cur) {
					
				
					callback(null, globalObject);
					}	
		
				}

			//	console.log(rootItems.length - 1, globalObject.length)
           // console.log(objectSize , cur)    
            //console.log(objectSize , cur)
               
                })
               

			})(value['link'][0], this.feedObject,objectSize,globalObject)
						
					  
		})
}
 



