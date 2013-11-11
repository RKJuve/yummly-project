APP.ShoppingList = Backbone.Collection.extend({
	model: APP.ShopppingListItem,
	url: "/list"
});