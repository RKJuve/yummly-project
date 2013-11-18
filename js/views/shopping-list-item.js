APP.ShoppingListItemView = Backbone.View.extend({

	tagName: "li",
	className: "list-item",

	template: Handlebars.compile("<a>{{name}}</a>"),

	render: function() {

		this.$el.html(this.template(this.model.toJSON()));
		return this;

	}

});