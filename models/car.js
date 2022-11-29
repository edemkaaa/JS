var mongoose = require('mongoose')
var Schema = mongoose.Schema


var carSchema = new Schema({
title: String,
nick: {
type: String,
unique: true,
required: true
},
avatar: String,
desc1: String,
desc2: String,
desc3: String,
created:{
type:Date,
default:Date.now
}
})
module.exports.Car = mongoose.model("car", carSchema)
