APP.Router = Backbone.Router.extend({

	routes: {
		"search":"search",
		"inventory": "inventory",
		"shoppingList": "shoppingList",
		"week": "weeklySchedule",
		"search/:recipe_id":"details"
	},

	default: function() {
		console.log("router default");
	},
	secondRoute: function() {
		console.log("second route hit");
	},
	details: function(recipie_id){
		APP.recipieDetails = new APP.RecipieDetails({id: recipie_id});
		APP.recipieDetails.fetch({
			data: {
				_app_id: "a1690f7a",
				_app_key: "ce9b21d8ad6d145ed0dce4da2e9754a4",
			},
			dataType: "jsonp",
			success: function(){
				APP.recipieDetailsView = new APP.RecipieDetailsView({model: APP.recipieDetails});
				APP.recipieDetailsView.render();
			}
		});

	},
	search: function() {
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

Backbone.history.start({pushState: true, root: "/"});
