APP.Router = Backbone.Router.extend({

	routes: {
		"search":"search",
		"inventory": "inventory",
		"inventory-item": "inventoryItem",
		"shopping-list": "shoppingList",
		"shopping-list-item": "shoppingListItem",
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
        APP.inventoryItem1 = APP.inventory.get(1);
        APP.inventoryItemView1 = new APP.InventoryItemView({
          model: APP.inventoryItem1
        });
        APP.inventoryItemView1.render();
        $("body").append(APP.inventoryItemView1.$el);
      }
    });
  },

	inventory: function() {
		APP.inventory = new APP.Inventory();
		APP.inventory.fetch({
			success: function() {
				var inventoryListView = new APP.InventoryList({
					collection: APP.inventory
				});
				inventoryListView.render();
			}
		});
	},

	shoppingListItem: function() {
		APP.shopping = new APP.ShoppingList();
		APP.shopping.fetch({
			success: function() {
				APP.shoppingListItem1 = APP.shopping.get(1);
				APP.shoppingListItemView = new APP.ShoppingListItemView({
					model: APP.shoppingListItem1
				});
				APP.shoppingListItemView.render();
        $("body").append(APP.shoppingListItemView.$el);
			}
		});
	},

	shopping: function() {
		console.log("You have reached the shopping list");
		//APP.shoppingList = new APP.ShoppingList();
	},
	week: function() {
		console.log("You have reached the weekly schedule");
		APP.weeklySchedule = new APP.WeeklySchedule();
	}


});

APP.router = new APP.Router();
Backbone.history.start({
	pushState: true,
	root: "/"
});
