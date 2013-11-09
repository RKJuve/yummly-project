APP.Router = Backbone.Router.extend({

	routes: {
		"firstRoute":"firstRoute",
		"second":"secondRoute",
		"yumRoute":"yumRoute",
	},
	default: function() {
		console.log("router default");
	},
	secondRoute: function() {
		console.log("second route hit");
	},
	yumRoute: function() {
		console.log("yumRoute hit");
		APP.searchResults = new APP.SearchResults();
		APP.searchResults.fetch();
	}

});

APP.router = new APP.Router();
Backbone.history.start({pushState: true});
