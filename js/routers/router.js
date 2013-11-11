APP.Router = Backbone.Router.extend({

	routes: {
		"yumRoute":"yumRoute",
		"inventory": "inventory",
		"shoppingList": "shoppingList",
		"week": "weeklySchedule"
	},
<<<<<<< HEAD
=======

	default: function() {
		console.log("router default");
	},
	secondRoute: function() {
		console.log("second route hit");
	},
>>>>>>> 55d262d74e4355356d363451871a54c54d99913d
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
	},
	inventory: function() {
		console.log("You have reached the inventory list");
		APP.inventory = new APP.Inventory();
	},
	shoppingList: function() {
		console.log("You have reached the shopping list");
		APP.shoppingList = new APP.ShoppingList();
	},
	week: function() {
		console.log("You have reached the weekly schedule");
		APP.weeklySchedule = new APP.WeeklySchedule();
	}
	

});

APP.router = new APP.Router();

Backbone.history.start({pushState: true});
