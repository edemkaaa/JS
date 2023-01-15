var express = require('express');
var router = express.Router();
var db = require('../mySQLConnect.js');
// var Priora = require("../models/priora").Priora
var checkAuth = require("../middleware/checkAuth.js")

/* GET prioras listing. */
router.get('/', function(req, res, next) {
res.send('<h1>Это экран для списка приор</h1>');
});


/* Страница приора */
router.get("/:nick", checkAuth, function(req, res, next){
    db.query(`SELECT * FROM WHERE priora.nick = '${req.params.nick}'`, (err, prioras) => {             
        if(err) {
            console.log(err);
            if(err) return next(err)
        } else {
            if(prioras.length == 0) return next(new Error("Нет такой приоры"))
            var priora = prioras[0];
            res.render('priora', {
            title: priora.title,
            picture: priora.avatar,
            about: prioras.about
        })
        }
});
});

module.exports = router;