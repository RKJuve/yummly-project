// bring in express and underscore

var path = require("path"),
		express = require("express"),
		_ = require("underscore");

//set up the express app
var app = express()
	.set("views", path.join(__dirname, "views"))
	.set("view engine", "hbs")
	.use(express.static(
		path.join(__dirname, "js"),
		path.join(__dirname, "css")
		))
	.use(express.bodyParser());

var db = [
  { id: 1, name: "apples" },
  { id: 2, name: "spinach" },
  { id: 3, name: "garlic" }
];

var inventoryDB = [
	{ id: 01, name: "flour" }
];

// set index view
app.get("/", function(req, res) {
	res.render("index");
});

app.get("/shopping", function(req, res) {
  res.json(db);
});
// returns all users in db

app.post("/shopping", function(req, res) {
  req.body.id = db.length + 1; // getId();
  // creates id for each object in db array
  db.push(req.body);
  // push post requests from users collections to db
  res.end();
  console.dir(id);
});

app.get("/inventory", function(req, res) {
	res.json(inventoryDB);
});

app.post("/inventory", function(req, res) {
	inventoryDB.push(req.body);
	res.end();
});




// start node server
var port = process.env.PORT || 3000;
app.listen(port);
console.log("The server is now listening on port %s", port);