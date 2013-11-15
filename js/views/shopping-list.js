APP.ShoppingListView = Backbone.View.extend({

	tagName: "ul",
	className: "shopping-list",


	render: function() {
		var attributes = this.model.toJSON();
		this.$el.html(this.template(attributes));
		return this;
	}

});

APP.ShoppingListItemView = Backbone.View.extend({

	tagName: "li",
	className: "shopping-list-item",

	render: function() {
		var attributes = this.model.toJSON();
		this.$el.html(this.template(attributes));
		return this;
	}

});