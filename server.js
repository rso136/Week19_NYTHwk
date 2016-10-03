var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

var Article = require('./models/article.js');

var app = express();
var PORT = process.env.PORT || 3000;

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

app.use(express.static('./public'));

mongoose.connect('mongodb://localhost/nytreact');
var db = mongoose.connection;

db.on('error', function (err) {
  console.log('Mongoose Error: ', err);
});

db.once('open', function () {
  console.log('Mongoose connection successful.');
});

app.get('/', function(req, res){
	res.sendFile('./public/index.html');
})

app.get('/api/saved', function(req, res) {

	Article.find({}).sort([['date', 'descending']])
		.exec(function(err, doc){
			if(err){
				console.log(err);
			}
			else {
				res.send(doc);
			}
		})
});

app.post('/api/saved', function(req, res){	
	
	Article.create({"title": req.body.title, "date": Date.now(), "url": req.body.url}, function(err, article){
		if(err){
			console.log(err);
		}
		else{
			console.log(article);
			res.send(article);
		}
	})
});

app.post('/api/delete/:id', function(req, res){

	Article.find({"_id": req.params.id}).remove(function(){
		console.log('article deleted');

	})
});

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});