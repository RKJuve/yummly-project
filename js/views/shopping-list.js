APP.ShoppingList = Backbone.View.extend({

	tagName: "ul",
	className: "shopping-list",

	render: function() {
		this.collection.each(function(model) {
			APP.shoppingListItem = new APP.ShoppingListItem({
				model: model
			});
			this.$el.append(APP.shoppingListItem.render().el);
		}, this);
		return this;
	}

});

APP.ShoppingListItem = Backbone.View.extend({

	tagName: "li",
	className: "shopping-list-item",

	render: function() {
		var attributes = this.model.toJSON();
		this.$el.html(this.template(attributes));
		return this;
	}

});