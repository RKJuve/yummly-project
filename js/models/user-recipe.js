APP.UserRecipe = Backbone.Model.extend({
	saveToList: function() {
		console.log('save to list model function');
		if (!APP.plannedRecipies) {
			APP.plannedRecipies = new APP.PlannedRecipies();
		}
		APP.plannedRecipies.add(this);
	},
	mux: function() {
		var temp = '["' + this.attributes.ingredientLines.join('", "') + '"]';
		this.attributes.ingredientLines = parser.parse(temp);
	}
});