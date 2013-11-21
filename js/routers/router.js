APP.Router = Backbone.Router.extend({

	routes: {
		"inventory": "inventory",
		"shopping": "shoppingList",
		"week": "weeklyScheduleRoute",
		"search": "search",
		"search/:recipe_id": "details",
		"favorite": "favorite",
		"favorites": "favorites",
		"addRecipe": "addRecipe",
		"userRecipes": "userRecipes",
		"userRecipes/:recipe_id": "userRecipeDetails",
		"home": "home"
	},
	userRecipeDetails: function(recipe_id) {
		$('#bin').empty();
		APP.userRecipeDetailsView = new APP.UserRecipeDetailsView({model: APP.userRecipes.get(recipe_id)})
	},
	userRecipes: function () {
		$('#bin').empty();
		APP.userRecipesView = new APP.UserRecipesView({collection: APP.userRecipes});
	},
	addRecipe: function(){
		APP.addRecipeView = new APP.AddRecipeView();
		console.log("add recipe hit");
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

	inventory: function() {
		$('#bin').empty();
		$("inventory").empty();
		var inventoryListView = new APP.InventoryListView({
			collection: APP.inventory
		});
	},

	shoppingList: function() {
		console.log("hi there");
		$('#bin').empty();
		var shoppingListView = new APP.ShoppingListView({
			collection: APP.shoppingList
		});
	},

	weeklyScheduleRoute: function() {
	},

	favorite: function() {
	},

	favorites: function() {
	},

	home: function() {
		$('#bin').empty();
		$("inventory").empty();
		APP.homeView = new APP.HomeView();
		$('#form').submit(function(){
			APP.router.navigate("search", {trigger: true});
			return false;
		});
	}


});

APP.router = new APP.Router();
Backbone.history.start({
	root: "/"
});
