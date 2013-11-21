APP.RecipieDetails = Backbone.Model.extend({
	urlRoot: "https://api.yummly.com/v1/api/recipe/",
	saveToList: function() {
		console.log('save to list model function');
		if (!APP.plannedRecipies) {
			APP.plannedRecipies = new APP.PlannedRecipies();
		}
		APP.plannedRecipies.add(APP.recipieDetails);
	},
	mux: function() {
		var temp = '["' + this.attributes.ingredientLines.join('", "') + '"]';
		this.attributes.ingredientLines = parser.parse(temp);
	}
});
