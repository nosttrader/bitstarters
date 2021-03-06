var express = require('express');
var fs = require('fs');
var buff = new Buffer('test');

var app = express.createServer(express.logger());

 app.get('/', function(request, response) {
  buff = fs.readFileSync('./index.html', 'utf8');
  response.send(buff.toString('utf-8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
