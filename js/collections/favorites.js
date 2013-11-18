APP.Favorites = Backbone.Collection.extend({
	model: APP.Favorite,
	url: "/favorites"
});