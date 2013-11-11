APP.Router = Backbone.Router.extend({

	routes: {
		"firstRoute":"firstRoute",
		"second":"secondRoute",
		"yumRoute":"yumRoute",
		"inventory": "inventory",
		"shoppingList": "shoppingList",
		"week": "weeklySchedule"
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
Backbone.history.start({root: "/", pushState: true});
