var mongoose = require('mongoose');
var Schema = mongoose.Schema;

exports.rssSchema = new Schema({
	country:String,
	category:String,
	link:String
})

exports.tvSchema =  new Schema({
	country:String,
	link:String
})

exports.rssFeedsSchema = new Schema({
	country:String,
	category: String,
	media_image: String,
	title: [],
	description: [],
	link: [],
	linkid:{type:String,unique:true},
	titleid:{type:String,unique:true},
	pubDate: [{type:Date}],
	meta: {
		title: String,
		link: String,
		source_image: String
	},
	likes: Number,
	views:Number,
	nipashe_comments: [
		{
			user: String,
			comment:String
		}
	]

})
