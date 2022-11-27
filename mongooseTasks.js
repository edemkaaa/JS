var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/test1')
var Cars = require("./models/cars").Cars


var cars = new Cars({
    title: "Седан",
    nick: "sedan"
})



console.log(cars)
cars.save(function(err, cars, affected){
console.log(cars.title)
})
