APP.RecipieDetails = Backbone.Model.extend({
	urlRoot: "http://api.yummly.com/v1/api/recipe/",
	saveToList: function() {
		console.log('save to list model function');
		if (!APP.plannedRecipies) {
			APP.plannedRecipies = new APP.PlannedRecipies();
		}
		APP.plannedRecipies.add(APP.RecipieDetails);
	}
});
