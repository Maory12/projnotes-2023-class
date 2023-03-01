//help to handle http errors 
var createError = require('http-errors');
// import the express library
var express = require('express');
// is a core-mode library to mandge system path
var path = require('path');
//helps to parse client cookies
var cookieParser = require('cookie-parser');
//library to loog http comuntcation
var logger = require('morgan');

//importing sobroutes
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var apiRouter = require('./routes/api');

//we are creating the express instance
var app = express();

// view engine setup
// we are delcaring the localization of the views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


//Registering middleware
//log all receivedrequests
app.use(logger('dev'));
//parse request data into json
app.use(express.json());
//decode url info 
app.use(express.urlencoded({ extended: false }));
//parse client cookies into json 
app.use(cookieParser());
//set up the estatic file server 
app.use(express.static(path.join(__dirname, 'public')));

//registering routes
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use(apiRouter);

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
  res.render('error');
});

module.exports = app;
