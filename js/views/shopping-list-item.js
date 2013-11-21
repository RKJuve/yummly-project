APP.ShoppingListItemView = Backbone.View.extend({

	tagName: "li",
	className: "shopping-list-item",
	initialize: function() {
		this.render();
	},

	render: function() {
		var template = Handlebars.compile($("#shopping-list-item").html());
		this.$el.html(template(this.model.toJSON()));
	}

});