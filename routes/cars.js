var express = require('express');
var router = express.Router();
var cars = require('./routes/cars');
app.use('/cars', cars);

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с cars');
});
/* Страница котят */
router.get("/:nick", function(req, res, next) {
    res.send(req.params.nick);
});

module.exports = router;