var mysql = require('mysql2');
var db = mysql.createConnection({
host : '127.0.0.1',
port: '3306',
user : 'root',
password : 'root',
database: 'priora'
});


db.connect( function (err) {
if (err) {
console.log("!!! Cannot connect !!! Error:"); throw err;
} else {
console.log("Connection established.");
}
});

module.exports = db;

// Данные о приорах забираются из базы данных в файле routes/prioras.js

// Код работы с MongoDB

var express = require('express');
var router = express.Router();
var Priora = require("../models/priora").Priora
var checkAuth = require("./../middleware/checkAuth.js")




/* GET prioras listing. */
router.get('/', function(req, res, next) {
res.send('<h1>Это экран для списка приор</h1>');
});


/* Страница котят */
router.get("/:nick", checkAuth, function(req, res, next) {
Priora.findOne({nick:req.params.nick}, function(err, priora){
if(err) return next(err)
if(!priora) return next(new Error("Нет такой приоры"))
res.render('priora', {
title: priora.title,
picture: priora.avatar,
desc: priora.desc,
});
})
});


module.exports = router;

// Комментируем все что связано с работой Mongo DB и добавляем работу с mySQL.

var express = require('express');
var router = express.Router();
var db = require('../mySQLConnect.js');
//var Priora = require("../models/priora").priora
//var checkAuth = require("./../middleware/checkAuth.js")




/* GET prioras listing. */
router.get('/', function(req, res, next) {
res.send('<h1>Это экран для списка приор</h1>');
});


/* Страница приор 
checkAuth убираем, пака так как проверка сессии написана на монго
*/
router.get("/:nick", function(req, res, next) {
db.query(`SELECT * FROM prioras WHERE prioras.nick = '${req.params.nick}'`, (err, prioras) => {
if(err) {
console.log(err);
if(err) return next(err)
} else {
if(prioras.length == 0) return next(new Error("Нет такой приоры"))
var priora = prioras[0];
res.render('priora', {
title: priora.title,
picture: priora.avatar,
desc: priora.about
})
// result(null, results);
}
})
// Priora.findOne({nick:req.params.nick}, function(err, priora){
// if(err) return next(err)
// if(!priora) return next(new Error("Нет такой приоры"))
// res.render('priora', {
// title: priora.title,
// picture: priora.avatar,
// desc: priora.desc,
// });
// })
});


module.exports = router;