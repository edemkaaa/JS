var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1/test1')
var Priora = require("../models/priora").Priora


var priora = new Priora({
title: "Sedan",
nick: "sedann"
})


console.log(priora)
priora.save(function(err, priora, affected){
console.log(priora.title)
})