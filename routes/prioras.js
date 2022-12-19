var express = require('express');
var router = express.Router();
var Priora = require("../models/priora").Priora
var checkAuth = require("./../middleware/checkAuth.js");
//var async = require("async");


/*GET users listing*/
router.get('/', function(req, res, next) {
    res.send('Новый маршрутизатор для маршрутов начинающихся с prioras')
})

router.get('/:nick',checkAuth, function(req, res, next) {
    Priora.findOne({nick: req.params.nick}, function(err, priora) {
        if(err) return next(err)
        if(!priora) return next(new Error("Нет такой тачки"))
        res.render('priora', {
            title: priora.title,
            picture: priora.avatar,
            desc: priora.desc
        })
    })
})
//
module.exports = router;