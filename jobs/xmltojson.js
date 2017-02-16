var parseString = require('xml2js').parseString;



exports.convertToJson = function (xmlfeedobject) {
    parseString(xmlfeedobject, function (err, body) {
                        if (err) {
                           // console.log("error here! "+i + currentFeedObject[i], err);
                        } else {

                            if (body != undefined) {
                                
                               

                            }
                        }

                    })
}