 // require configuration file
require('dotenv').config()

// import packages
let express      = require('express');
let path         = require('path');
// let favicon      = require('serve-favicon');
let mongoose     = require('mongoose');
let cookieParser = require('cookie-parser');
let session      = require('express-session');
let flash        = require('connect-flash');
let bodyParser   = require('body-parser');
let route        = require('./_routes/web');
// let routeApi  = require('./_routes/api') // API Route
let passport     = require('passport');

// express validator 
let expressValidator = require('express-validator');

// database 
// let database = require('./database/database');

// init express
let app = express();

// set pug as view engine
app.set('view engine', 'pug');

// set public folder to serve assets
app.use(express.static(path.join(__dirname, './public')));

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// init body-parser
app.use(cookieParser());

// init app session
app.use(session({
  secret: 'noravel',
  resave: true,
  saveUninitialized: true,
  cookie: { secure: true }
}));

// init connect flash 
app.use(flash());

// set flash middleware
app.use(function (req, res, next){
	res.locals.flashes = req.flash();
	next();
});

// validate all request 
app.use(expressValidator());

// require passport session
require('./config/auth')(passport);

// init passport
app.use(passport.initialize());
persistent login sessions
app.use(passport.session()); 

// web routes index entry
app.use('/', route);
// app.use('/api', route); // API Route

// export application module
module.exports = app;