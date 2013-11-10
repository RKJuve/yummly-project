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
		APP.searchResults.fetch({
			success: function(){
				console.log("fetch success callback");
				APP.searchResultsView = new APP.SearchResultsView({collection: APP.searchResults});
				APP.searchResultsView.render();
			}
		});
	}

});

APP.router = new APP.Router();
Backbone.history.start({pushState: true});
