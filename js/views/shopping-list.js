APP.ShoppingListView = Backbone.View.extend({

	el: "#bin",
	tagName: "ul",
	className: "shopping-list",

	render: function() {
		this.collection.each(function(model) {
			APP.shoppingListItemView = new APP.ShoppingListItemView({model: model});
			this.$el.append(APP.shoppingListItemView.render().el);
		}, this);
		return this;
	}
});