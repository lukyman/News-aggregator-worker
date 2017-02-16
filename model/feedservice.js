var parseString = require('xml2js').parseString;
var request = require('request');
var Cache = require('./Cache');
var rssmodel = require('./rssmodel');
module.exports={

    FeedsInJson: function (Categorykey,callback) {
      
       var cur = 0;
       var feedsObject = [];
      // var e =c.getFeedsFromCache(cachekey);
       Cache.getCache(Categorykey, function (err,data) {
         if (data) {
           callback(null, data);
         } else {
           
         }
       })
     /*  Cache.get(cachekey, function (err, data) {
         if (!err) {

          //  console.log("errorr",err,"data",data)  


           if (data==undefined) { //if data does not exist in cache, make new http request
              console.log(cachekey)

               for(var i in resource[cachekey]){
                 
               // var objectSize = Object.keys(resource[cachekey]).length;


                request(resource[cachekey][i],{trim:true}, function(err,success){
                   cur++;


                    if(err){
                        callback(err);
                        console.log(err);

                    }else{
  
                     
                      // callback(null,success.body)
                        parseString(success.body,function(err,body){
                          if (err) {
                            console.log("errorr here!",err);
                          }else{
                            
                            if (body!=undefined) {

                              feedsObject.push([body]);
                               //callback(null,feedsObject)
                           
                          
                             }
                          }
                          
                        })
                        console.log(cur)
                       // callback(null,feedsObject)
                        if(cur==objectSize){

                           var sortFeeds = feedsort.sort(feedsObject);

                           // create cache
                           Cache.set(cachekey,sortFeeds,1800,function(err,result){
                             if (err) {
                              console.log(err)
                             }else{
                              console.log(result)
                             }

                           })

                          callback(null,sortFeeds)
                          }

                    }

                })
       
               }
           
               // callback(null,feedsObject)
            }else{
              
              callback(null,data)
            } 
            
      
            callback(null,data)

            }else{

              // console.log(err)
                callback(data);
            }
        
    })*/
},
getFeed:function(Categorykey,clb){
  rssmodel.getFeeds(Categorykey,function(err,success){
    if(success){
      clb(success);
    }
  });
}
}


