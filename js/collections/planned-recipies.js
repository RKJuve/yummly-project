APP.PlannedRecipies = Backbone.Collection.extend({
	model: APP.RecipieDetails,
	initialize: function() {
		this.bindEvents();
	},
	bindEvents: function() {
		this.on('add', function(model) {
			model.mux();
			model.attributes.ingredientLines.forEach(function(el, index, array){
				APP.shoppingList.add(new APP.ShoppingListItem(el));
			});
		});
	}
});