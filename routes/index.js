var express = require('express')
var router = express.Router()
var Priora = require("../models/priora").Priora


/* GET home page. */
router.get('/', function (req, res, next) {
  Priora.find({}, { _id: 0, title: 1, nick: 1 }, function (err) {
    req.session.greeting = "hi!!",
      res.cookie('greeting', 'hi!!').render('index', {
        title: 'Express',
        counter:req.session.counter
      });
  })
});


/* GET home page. 
router.get('/', function(req, res, next) {
    Priora.find({},{_id:0,title:1,nick:1},function(err,menu){
        res.render('index', {
                                title: 'Express',
                                menu: menu
                            });
    })
});
*/

module.exports = router;