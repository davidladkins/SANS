var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require("fs");

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8082; 

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router
router.get('/movies', function(req, res) {
	 fs.readFile( __dirname + "/" + "movies.json", 'utf8', function (err, data) {
			 console.log( data );
          res.end(data);
          //res.json({ message: data });   
	 });
   
});
router.route('/movie')
 .post(function(req, res) {
    console.log(req.body.id);    
   // First read existing movies.
     fs.readFile( __dirname + "/" + "movies.json", 'utf8', function (err, data) {
         data = JSON.parse( data );
	      data["movie"+req.body.id] = req.body;
      console.log(data);   
          
     fs.writeFile(__dirname + "/" + "movies.json", JSON.stringify(data), function (err) {
         if (err) return console.log(err);
         
      })






   });

   res.json({ message: 'movie ' + req.body.id + ' created!' });
});






app.post('/movie', function (req, res) {
   // First read existing movies.
   fs.readFile( __dirname + "/" + "movies.json", 'utf8', function (err, data) {
   
       data = JSON.parse( data );
	  
	  console.log(req);      // your JSON
     // res.send(req);
	   //data["movie"+req.body.id] = movie["movie"+req.body.id];
      
      res.end(JSON.stringify(data));
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

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

var server = app.listen(port, function () {

	var host = server.address().address
	var port = server.address().port
	console.log("Example app listening at http://%s:%s", host, port)

})