var mongoose = require('mongoose')
var Schema = mongoose.Schema


var prioraSchema = new Schema({
title: String,
nick: {
type: String,
unique: true,
required: true
},
avatar: String,
desc: String,
created:{
type:Date,
default:Date.now
}
})
module.exports.Priora = mongoose.model("Priora", prioraSchema)
