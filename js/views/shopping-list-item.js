APP.ShoppingListItemView = Backbone.View.extend({

	el: "#shopping",

	initialize: function() {
		this.render();
	},

	render: function() {
		var template = Handlebars.compile($("#shopping-list-item").html());
		this.$el.html(template(this.model.toJSON()));
		console.log("rendered");
	}

});