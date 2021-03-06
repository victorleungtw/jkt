'use strict';

var express = require('express');
var app = express();

app.use(express.static(__dirname + '/build/'));

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('Server started on port: %d', port);
});
