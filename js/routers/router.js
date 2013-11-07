APP.Router = Backbone.Router.extend({

	routes: {
		"firstRoute":"firstRoute"
	},

	firstRoute: function() {
		console.log("first route hit");
	}

});

APP.routers = new APP.Router();
Backbone.history.start({root: "/"});