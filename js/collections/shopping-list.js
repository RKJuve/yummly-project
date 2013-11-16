APP.ShoppingList = Backbone.Collection.extend({
	model: APP.ShoppingListItem,
	url: "/shopping-list"
});