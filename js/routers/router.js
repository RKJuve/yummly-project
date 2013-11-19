APP.Router = Backbone.Router.extend({

	routes: {
		"inventory": "inventory",
		"inventory-item": "inventoryItem",
		"shopping-list": "shoppingList",
		"shopping-list-item": "shoppingListItem",
		"week": "weeklyScheduleRoute",
		"search": "search",
		"search/:recipe_id": "details",
		"favorite": "favorite",
		"favorites": "favorites",
		"addRecipe": "addRecipe",
		"userRecipes": "userRecipes"
	},
	userRecipes: function () {
		APP.userRecipesView = new APP.UserRecipesView();	
	},
	addRecipe: function(){
		APP.addRecipeView = new APP.AddRecipeView();
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
				$('#form').submit(function(){
					APP.router.navigate("search", {trigger: true});
					return false;
				});
			}
		});
	},

	inventoryItem: function() {
    APP.inventory = new APP.Inventory();
    APP.inventory.fetch({
      success: function() {
        // APP.inventoryItem1 = APP.inventory.get(1);
        // APP.inventoryItemView1 = new APP.InventoryItemView({
          // model: APP.inventoryItem1
        // });
        // APP.inventoryItemView1.render();
        // $("body").append(APP.inventoryItemView1.$el);
      }
    });
  },

	inventory: function() {
		console.log("Inventory route has been hit");
		APP.inventory = new APP.Inventory();
		APP.inventory.fetch({
			success: function() {
				var inventoryListView = new APP.InventoryList({
					collection: APP.inventory
				});
				inventoryListView.render();
				console.log("hi");
			}
		});
	},

	shoppingListItem: function() {
		APP.shopping = new APP.ShoppingList();
		APP.shopping.fetch({
			success: function() {
				// APP.shoppingListItem1 = APP.shopping.get(1);
				// APP.shoppingListItemView = new APP.ShoppingListItemView({
					// model: APP.shoppingListItem1
				// });
				// APP.shoppingListItemView.render();
        // $("body").append(APP.shoppingListItemView.$el);
			}
		});
	},

	shoppingList: function() {
		console.log("You have reached the shopping list");
		APP.shoppingList = new APP.ShoppingList();
		APP.shoppingList.fetch({
			success: function() {
				var shoppingListView = new APP.ShoppingListView({
					collection: APP.shoppingList
				});
				shoppingListView.render();
			}
		});
	},

	weeklyScheduleRoute: function() {
		console.log("You have reached the weekly schedule");
		APP.weeklySchedule = new APP.WeeklySchedule();
		APP.weeklySchedule.fetch({
			success: function() {
				var weeklyScheduleView = new APP.WeeklyScheduleView({
					collection: APP.weeklySchedule
				});
				weeklyScheduleView.render();
			}
		});
	},

	favorite: function() {
		APP.favorites = new APP.Favorites();
		APP.favorites.fetch({
			success: function() {
				// APP.favoriteRecipe1 = APP.favorites.get(1);
				// APP.favoriteView = new APP.FavoriteView({
					// model: APP.favoriteRecipe1
				// });
				// APP.favoriteView.render();
				// $("body").append(APP.favoriteView.$el);
				// console.log(APP.favoriteRecipe1);
			}
		});
	},

	favorites: function() {
		APP.favorites = new APP.Favorites();
		APP.favorites.fetch({
			success: function() {
				APP.favoritesView = new APP.FavoritesView({
					collection: APP.favorites
				});
				APP.favoritesView.render();
			}
		});
	}


});

APP.router = new APP.Router();
Backbone.history.start({
	//pushState: true,
	root: "/"
});
