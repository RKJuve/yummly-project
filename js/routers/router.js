APP.Router = Backbone.Router.extend({

	routes: {
		"yumRoute":"yumRoute",
	},
	yumRoute: function() {
		$('#bin').empty();
		var query = $('#query').val()
		APP.searchResults = new APP.SearchResults();
		APP.searchResults.fetch({
			data: {
				q: query
			},
			success: function(){
				if (_.isEmpty(APP.searchResults.models)) {
					$("#bin").html("<h2>no matches :(</h2>");
					return;
				}
				APP.searchResultsView = new APP.SearchResultsView({collection: APP.searchResults});
				APP.searchResultsView.render();
			}
		});
	}
	

});

APP.router = new APP.Router();

Backbone.history.start({pushState: true});
