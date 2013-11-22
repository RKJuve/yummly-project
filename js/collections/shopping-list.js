APP.ShoppingList = Backbone.Collection.extend({
	model: APP.ShoppingListItem,

	done: function() {
		return this.where({done: true});
	}
});