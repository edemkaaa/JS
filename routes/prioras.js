var express = require('express');
var router = express.Router();
var Priora = require("../models/priora").Priora
var async = require("async")

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с prioras');
});

/* Страница машин */


router.get('/:nick', function(req, res, next) {
    async.parallel([
            function(callback){
                Priora.findOne({nick:req.params.nick}, callback)
            },
            function(callback){
                Priora.find({},{_id:0,title:1,nick:1},callback)
            }
        ],
        function(err,result){
            if(err) return next(err)
            var priora = result[0]
            var prioras = result[1] || []
            if(!priora) return next(new Error("нема приоры"))
            res.render('priora', {
                title: priora.title,
                picture: priora.avatar,
                desc: priora.desc,
                menu: prioras
            });
        })
  })
  
  module.exports = router