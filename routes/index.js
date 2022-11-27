var express = require('express');
var router = express.Router();
var Cars = require("../models/cars").Cars
/* GET home page. */
/* GET home page. */
/* GET home page. */
router.get('/', function(req, res, next) {
    Cat.find({},{_id:0,title:1,nick:1},function(err,menu){
        res.render('index', {
                                title: 'Express',
                                menu: menu
                            });
    })
});

/* Страница приоры хэтчбек */
router.get('/hatchback', function(req, res, next) {
    res.render('priora', {
        title: "Хэтчбек",
        picture: "images/hatchback.jpg",
        desc: "Приора,которая подойдет всем - и груз загрузить,и поставить музыку,и покататься."
    })
});
/* Страница приоры седан */
router.get('/sedan', function(req, res, next) {
    res.render('priora', {
        title: "Седан",
        picture: "images/sedan.jpg",
        desc: "Приора,которая самая молодежная. Её тонируют,и выглядит она лучше всех."
    })
});


/* Страница приоры универсал */
router.get('/universal', function(req, res, next) {
    res.render('priora', {
        title: "Универсал",
        picture: "images/universal.jpg",
        desc: "Приора для дедушек,либо рабочих - в ней можно возить много груза"
    })
});
module.exports = router;
