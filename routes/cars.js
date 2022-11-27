var express = require('express');
var router = express.Router();



/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с cars');
});
/* Страница котят */
router.get("/:nick", function(req, res, next) {
    res.send(req.params.nick);
});
/* Страница героев */
router.get('/:nick', function(req, res, next) {
    Cars.findOne({nick:req.params.nick}, function(err,cars){
        if(err) return next(err)
        if(!cars) return next(new Error("Нет такого котенка в этом мультике"))
        res.render('cars', {
            title: cars.title,
            picture: cars.avatar,
            desc: cars.desc
        })
    })
})

module.exports = router;