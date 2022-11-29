var express = require('express');
var router = express.Router();
var Car = require("../models/car").Car
var async = require("async")

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с Cars');
});

/* Страница ведущих */
router.get('/:nick', function(req, res, next) {
  async.parallel([
          function(callback){
            Car.findOne({nick:req.params.nick}, callback)
          },
          function(callback){
            Car.find({},{_id:0,title:1,nick:1},callback)
          }
      ],
      function(err,result){
          if(err) return next(err)
          var car = result[0]
          var cars = result[1] || []
          if(!car) return next(new Error("Нет машины нет"))
          res.render('priora', {
              title: car.title,
              picture: car.avatar,
              desc1: car.desc1,
              desc2: car.desc2,
              desc3: car.desc3,
              menu: cars
          });
      })
})

module.exports = router;