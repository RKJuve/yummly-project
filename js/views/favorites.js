APP.FavoritesView = Backbone.View.extend({

	el: ".container",
	tagName: "ul",
	className: "favorites",

	render: function() {
		this.collection.each(function(model) {
			APP.favoriteView = new APP.FavoriteView({model: model});
			this.$el.append(APP.favoriteView.render().el);
		}, this);
		return this;
	}

});