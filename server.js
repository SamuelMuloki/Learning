var express = require('express');
var app = express()

// app.use('/', function(req, res) {
//     res.send('Hello world');
// });

/* Get request */
// app.get('/', function(req, res) {
//     res.send('This is a GET request');
// });

/* Post request */
// app.post('/', function(req, res) {
//     res.send('This a POST request');
// });

/* Chain several middleware to handle http requests */
// app.route('/').get(function(req, res) {
//     res.send('This is a GET request');
// }).post(function(req, res) {
//     res.send('This a POST request');
// });

/* Chain several middleware in a single routing function */

var hasName = function(req, res, next) {
    if (req.params.name) {
        next();
    } else {
        res.send('What is your name');
    }
}

var sayHello = function(req, res, next) {
    res.send('Hello' + req.params.name);
}

app.get('/', hasName, sayHello)

app.listen(3000);
console.log("Server is running at http://localhost:3000");

module.exports = app
