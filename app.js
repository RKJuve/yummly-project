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



var db = [
	{
		id: 1,
		name: "flour"
	},
	{
		id: 2,
		name: "milk"
	},
	{
		id: 3,
		name: "eggs"
	}
];

var weekdb = [
	{
		id: 1,
		day: "Monday"
	},
	{
		id: 2,
		day: "Tuesday"
	},
	{
		id: 3,
		day: "Saturday"
	}
];

var favoritesdb = [
	{
		id: 1,
		name: "Favorite Recipe 1"
	},
	{
		id: 2,
		name: "Favorite Recipe 2"
	},
	{
		id: 3,
		name: "Favorite Recipe 3"
	}
];


app.get("/inventory", function(req, res) {
	res.json(db);
});

app.post("/inventory", function(req, res) {
	req.body.id = db.length + 1;
	db.push(req.body);
	res.end();
	console.log(id);
});

app.get("/shopping-list", function(req, res) {
	res.json(db);
});

app.post("/shopping-list", function(req, res) {
	req.body.id = db.length + 1;
	db.push(req.body);
	res.end();
	console.log(id);
});

app.get("/week", function(req, res) {
	res.json(weekdb);
});

app.post("/week", function(req, res) {
	//req.body.id = db.length + 1;
	weekdb.push(req.body);
	res.end();
	console.log(id);
});

app.get("/favorites", function(req, res) {
	res.json(favoritesdb);
});

app.post("/favorites", function(req, res) {
	//req.body.id = db.length + 1;
	favoritesdb.push(req.body);
	res.end();
	console.log(id);
});


// start node server
var port = process.env.PORT || 3000;
app.listen(port);
console.log("The server is now listening on port %s", port);