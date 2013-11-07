// bring in express and underscore

var path = require("path"),
    express = require("express"),
    _ = require("underscore");

//set up the express app

var app = express()
            .set("views", path.join(__dirname, "views"))
            .set("view engine", "hbs")
            .use(express.static(path.join(__dirname, "public")))
            .use(express.bodyParser());

// set index view
app.get("/", function(req, res) {
  res.render("index");
});

// start node server
var port = process.env.PORT || 3000;
app.listen(port);
console.log("The server is now listening on port %s", port);