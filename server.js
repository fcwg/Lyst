var express = require('express');
var app = express();
var itemsController = require('./server/controllers/itemsController');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/shoppinglist');

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/client/views/index.html');
});

app.use(bodyParser());

app.use('/js', express.static(__dirname + '/client/js'));


app.get('/api/items', itemsController.list);
app.post('/api/items', itemsController.create);
app.delete('/api/items', itemsController.delete);

app.listen(3000, function() {
	console.log("I am listening and listening some more");
})

