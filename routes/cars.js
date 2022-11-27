var express = require('express');
var router = express.Router();
var Cars = require("../models/cars").Cars
var async = require("async")


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с cars');
});
/* Страница котят */
router.get('/:nick', function(req, res, next) {
    async.parallel([
            function(callback){
                Cars.findOne({nick:req.params.nick}, callback)
            },
            function(callback){
                Cat.find({},{_id:0,title:1,nick:1},callback)
            }
        ],
        function(err,result){
            if(err) return next(err)
            var cars = result[0]
              var cars = result[1]
              console.log(cars)
            if(!cars) return next(new Error("Такой тачки нет"))
            console.log(cars.avatar)
            res.render('cars', {
                title: cars.title,
                picture: cars.avatar,
                desc: cars.desc
            });
        })
})

async.parallel([
        function(callback){
            Cars.findOne({nick:req.params.nick},function(err,cars){
                callback(err,cars)
            })
        },
        function(callback){
            Cars.find({},function(err,cars){
                callback(err,cars)
            })
        }
    ],
    function(err,result){
        if(err) return next(err)
        var cat = result[0]
        if(!cars) return next(new Error("Такой тачки нет"))
        console.log(cat.avatar)
        res.render('cars', {
            title: cars.title,
            picture: cars.avatar,
            desc: cars.desc
        });
    })

module.exports = router;