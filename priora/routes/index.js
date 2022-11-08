var express = require('express');
var router = express.Router();

/* Страница приоры хэтчбек */
router.get('/hatchback', function(req, res, next) {
    res.send("<h1>Страница приоры хэтчбек</h1>")
});

/* Страница приоры седан */
router.get('/sedan', function(req, res, next) {
    res.send("<h1>Страница приоры седан</h1>")
});

/* Страница приоры универсал */
router.get('/universal', function(req, res, next) {
    res.send("<h1>Страница приоры универсал</h1>")
});
module.exports = router;
