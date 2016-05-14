var express = require('express');
var db = require('./db/index.js');
var path = require('path');
// Middleware
var morgan = require('morgan');
var parser = require('body-parser');

// Router
var router = require('./routes.js');

var app = express();
module.exports.app = app;



// Set what we are listening on.
app.set('port', 3000);

// Logging and parsing
app.use(morgan('dev'));
app.use(parser.json());

// Set up our routes
app.use('/classes', router);

// Serve the client files
app.use(express.static(__dirname + '/../client'));

app.get('/', function(req, res) {
  res.sendFile(path.resolve('client/index.html'));
});

app.get('*', function(req, res, next) {
  var err = new Error();
  err.status = 404;
    // next(err);
  res.send('BAD ERROR 404');
});
// If we are being run directly, run the server.
if (!module.parent) {
  app.listen(app.get('port'));
  console.log('Listening on', app.get('port'));
}

