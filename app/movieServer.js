var express = require('express');
var app = express();
var fs = require("fs");

app.get('/movies', function (req, res) {
	 fs.readFile( __dirname + "/" + "movies.json", 'utf8', function (err, data) {
			 console.log( data );
			 res.end( data );
	 });
})

app.post('/movie', function (req, res) {
   // First read existing movies.
   fs.readFile( __dirname + "/" + "movies.json", 'utf8', function (err, data) {
   
       data = JSON.parse( data );
	  
	  console.log(req.body);      // your JSON
      res.send(req.body);
	   //data["movie"+req.body.id] = movie["movie"+req.body.id];
      
      // res.end(req);
   });
})

app.delete('/movie/:id', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "movies.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       delete data["movie" + req.params.id];
       console.log( data );
       res.end( JSON.stringify(data));
   });
})

app.get('/movie/:id', function (req, res) {
   // First read existing movies.
   fs.readFile( __dirname + "/" + "movies.json", 'utf8', function (err, data) {
       var movies = JSON.parse(data);
       var movie = movies["movie" + req.params.id] 
       console.log( movie );
       res.end( JSON.stringify(movie));
   });
})


var server = app.listen(8082, function () {

	var host = server.address().address
	var port = server.address().port
	console.log("Example app listening at http://%s:%s", host, port)

})