APP.Router = Backbone.Router.extend({

	routes: {
		"search":"search",
		"inventory": "inventoryList",
		"inventory-item": "inventoryItem",
		"shopping-list-item": "shoppingListItem",
		"shopping": "shoppingList",
		"week": "weeklySchedule",
		"search/:recipe_id":"details"
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

	inventoryItem: function() {
		APP.inventory = new APP.Inventory();
		APP.inventory.fetch({
			success: function() {
				APP.inventory1 = APP.inventory.get(01);
				APP.inventoryListView1 = new APP.InventoryListView({
					model: APP.inventory1
				});
				APP.inventoryListView1.render();
				$("body").append(APP.inventoryListView1.$el);
			}
		});
		console.log(APP.inventory.get(1));
	},

	inventoryList: function() {
		APP.inventoryList = new APP.Inventory();
		APP.inventoryList.fetch({
			success: function() {
				var inventoryListView = new InventoryListView({
					collection: APP.inventoryList
				});
				$("body").append(inventoryListView.render().el);
				console.log("You have reached the inventory list");
			}
		});
	},

	shoppingListItem: function() {
		console.log("You have reached the shopping list item");
		APP.shoppingList = new APP.ShoppingList();
		APP.shoppingList.fetch({
			success: function() {
				APP.shoppingListItem = APP.shoppingList.get(1);
				APP.shoppingListView = new APP.shoppingListView({
					model: APP.shoppingListItem
				});
				APP.shoppingListItem.render();
				$("body").append(APP.shoppingListItem.$el);
			}
		});
		console.log(APP.shoppingList.get(1));
	},

	shoppingList: function() {
		console.log("You have reached the shopping list");
		APP.shoppingList = new APP.ShoppingList();
		APP.shoppingList.create({
			success: function() {
				APP.shoppingListView = new ShoppingListView({
					collection: APP.shoppingList
				});
				//APP.shoppingListView.render();
				$("body").append(shoppingListView.render().el);
			}
		});
	},

	week: function() {
		console.log("You have reached the weekly schedule");
		APP.weeklySchedule = new APP.WeeklySchedule();
	}


});

APP.router = new APP.Router();
Backbone.history.start({
	//pushState: true,
	root: "/"
});
