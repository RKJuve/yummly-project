// bring in express and underscore

var path = require("path"),
		express = require("express"),
		_ = require("underscore");

//set up the express app
var app = express()
	.use(express.static(path.join(__dirname, "css")))
	.use(express.static(path.join(__dirname, "js")))
	.use(express.static(__dirname))
	.use(express.bodyParser());

// start node server
var port = process.env.PORT || 3000;
app.listen(port);
console.log("The server is now listening on port %s", port);