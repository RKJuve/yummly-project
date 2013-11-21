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
		"editRecipe/:recipe_id": "editRecipe",
		"home": "home"
	},
	editRecipe: function(recipe_id) {
		APP.clearDivs();
		APP.userRecipeEditView = new APP.UserRecipeEditView({model: APP.userRecipes.get(recipe_id), collection:APP.userRecipes});
	},
	userRecipeDetails: function(recipe_id) {
		APP.clearDivs();
		APP.userRecipeDetailsView = new APP.UserRecipeDetailsView({model: APP.userRecipes.get(recipe_id)});
	},
	userRecipes: function () {
		APP.clearDivs();
		APP.userRecipesView = new APP.UserRecipesView({collection: APP.userRecipes});
	},
	addRecipe: function(){
		APP.clearDivs();
		APP.addRecipeView = new APP.AddRecipeView();
	},
	details: function(recipie_id){
		APP.clearDivs();
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
		var query = $('#query').val();
		APP.clearDivs();
		APP.homeView = new APP.HomeView();
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
		APP.clearDivs();
		$('#bin').empty();
		var inventoryListView = new APP.InventoryListView({
			collection: APP.inventory
		});
	},

	shoppingList: function() {
		APP.clearDivs();
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
		APP.clearDivs();
		console.log("home route hit");
		APP.homeView = new APP.HomeView();
		APP.headerView = new APP.HeaderView();
	},
	initialize: function() {
		this.bind("route", function(route){
			APP.headerView.render(route);
    	});
	}
});

APP.clearDivs = function(){
	['#bin', "#inventory","#shopping","#searchDeets"].forEach(function(val){
		$(val).empty();
	});
}

APP.router = new APP.Router();
Backbone.history.start({
	root: "/"
});
