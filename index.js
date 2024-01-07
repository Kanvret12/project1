// load the things we need
var express = require('express');
var app = express();
const expressLayout = require('express-ejs-layouts');
const navigationLinks = require('./views/layouts/index.js');

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));
app.use(expressLayout);
// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
    res.render('index',  { layout: false, active: 'dashboard',  navigationLinks});
});

// about page
app.get('/about', function(req, res) {
    res.render('about', { layout: false, active: 'about', navigationLinks });
});
app.get('/docs', function(req, res) {
    res.render('docs', { layout: false, active: 'docs', navigationLinks });
});
app.get('/maps', function(req, res) {
    res.render('maps', { layout: false, active: 'maps', navigationLinks});
});

app.listen(2000, () => {
    console.log(`App listening at http://localhost:2000 \nCreated By ShielD`);
  });