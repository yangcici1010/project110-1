var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/index');
//var midpjRouter = require('./routes/midpj');
var usersRouter = require('./routes/users');

var apiRouter = require('./routes/api_81');
var crownRouter = require('./routes/crown_81');
var crown2Router = require('./routes/crown2_81');

var app = express();

const corsOptions = {
  origin: [
    'https://7web-81-499csav88-yangcici1010.vercel.app/',
    'http://localhost:3000',
  ],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  allowedHeaders: ['Content-Type', 'Authorization'],
};
app.use(cors(corsOptions));

app.set('views', './views'); // specify the views directory
app.set('view engine', 'ejs'); // register the template engine

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/midpj', midpjRouter);
//app.use('/users', usersRouter);

app.use('/api_81', apiRouter);
app.use('/crown_81', crownRouter);
app.use('/crown2_81', crown2Router);
//app.use('/', indexRouter);

module.exports = app;
