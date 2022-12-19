var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/priora')
var prioras = require('./routes/prioras');
var session = require("express-session")
var Priora = require("./models/priora").Priora

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.engine('ejs',require('ejs-locals'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var MongoStore = require('connect-mongo');(session);
app.use(session({
    secret: "prioras",
    cookie:{maxAge:60*1000},
    resave: true,
    saveUninitialized: true,
    store: MongoStore.create({mongoUrl: 'mongodb://localhost/priora'})	
}))

app.use(function(req,res,next){
    res.locals.nav = []

    Priora.find(null,{_id:0,title:1,nick:1},function(err,result){
        if(err) throw err
        res.locals.nav = result
        next()
    })
})

app.use(require("./middleware/createMenu.js"))
app.use(require("./middleware/createUser.js"))

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/prioras', prioras);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error',
  {
    picture: "../images/error.png",
    title: 'ошибка',
  });
});

module.exports = app;