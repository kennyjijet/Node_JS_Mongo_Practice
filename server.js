var express = require('express'),
    app = express(),
    port = process.env.PORT || 3001,
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    Author = require('./api/models/Author'),
    Customer = require('./api/models/myModel'),
    Story = require('./api/models/Story');
    
//created model loading here
//require('./api/models/myModel');
//require('./api/models/Author');
//require('./api/models/Story');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/mydb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/myRoutes'); //importing route
routes(app); //register the route

app.listen(port);

app.use(function (req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found' })
});

console.log('todo list RESTful API server started on: ' + port);