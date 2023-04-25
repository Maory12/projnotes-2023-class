//help to handle http errors 

import createError  from 'http-errors'
// import the express library
import express  from'express';
// is a core-mode library to mandge system path
import path  from 'path';
//helps to parse client cookies
import cookieParser from 'cookie-parser';
//library to loog http comuntcation
import logger from 'morgan'

//importing sobroutes
import indexRouter from '@server/routes/index'
//import add from "./routes/index";
import usersRouter from'@server/routes/users';
import apiRouter from'@server/routes/api';

//setting webpack modules 
import webpack from 'webpack'; 
import WebpackDevMiddleware from 'webpack-dev-middleware';
import WebpackHotMiddleware from 'webpack-hot-middleware';
//importing webpack configuration 
import  WebpackConfiguration  from '../webpack.dev.config';
import webpackDevConfig from '../webpack.dev.config';

//we are creating the express instance
const app = express();

//het the excution node 
const nodeEnviroment = process.env.NODE_ENV || 'production'

//deciding if we add webpack middleware or not 
if(nodeEnviroment === 'development'){
  //start webpack dev server 
  console.log(" 🦾Ejecutando en modo desarrollo");
  //adding the key mode with its value development 
  webpackConfig.mode = nodeEnviroment;

  //seting the port 
  webpackDevConfig.devServer.port = process.env.PORT;

//setting up the HMR(hot module replacement)
webpackConfig.entry = [
  "webpack-hot-middleware/client?reload=true&timeout=1000", 
  webpackConfig.entry];
  //creating the bundler 
  const bundle = webpack(webpackConfig); 
  //anabling 
  app.use( WebpackDevMiddleware(bundle, {
    publicPath: webpackConfig.output.publicpath
  }) );
  //enabling the webpack  HMR
  app.use(WebpackHotMiddleware(bundle) );
}else{
  console.log("🏭 ejecutando en modo produccion");
}

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
app.use(express.static(path.join(__dirname, '../public')));

//registering routes
app.use ('/', indexRouter);
app.use('/users', usersRouter);
app.use(apiRouter);

// catch 404 and forward to error handler
app.use((err, req, res, next)=> {
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

export default  app;
