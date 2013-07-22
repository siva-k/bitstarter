
var express = require('express');
var fs= require('fs');

var app = express.createServer(express.logger());
var buffer = new Buffer(10000);
buffer.write(fs.readFileSync('index.html','utf8'),'utf8');

app.get('/', function(request, response) {
  response.send(buffer.toString());
});


var port = process.env.PORT || 8080;
app.listen(port, function()
{
  //console.log(buffer.toString());
	console.log("listening on 8080");
});



