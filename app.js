var express = require('express');
var exphbs  = require('express-handlebars');
const MongoClient = require('mongodb').MongoClient;


 
var app = express();
 
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
 
// tell express to find static files in the "public" directory
app.use(express.static('public')); 

// connect to the db and start the express server
let db;

// ***Replace the URL below with the URL for your database***
const url =  'mongodb://<heroku_d7x3dbr3>:<dbpassword>@ds163738.mlab.com:63738/heroku_d7x3dbr3';

// Routes
app.get('/', function (req, res) {
    res.render('home');
});
 
// add submit POST route

// start server
app.listen(3000);