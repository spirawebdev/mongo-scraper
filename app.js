var express = require('express');
var exphbs  = require('express-handlebars');
 
var app = express();
 
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
 
// tell express to find static files in the "public" directory
app.use(express.static('public')); 

// Routes
app.get('/', function (req, res) {
    res.render('home');
});
 


app.listen(3000);