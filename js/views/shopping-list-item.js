APP.ShoppingListItemView = Backbone.View.extend({

	tagName: "li",
	className: "shopping-list-item",

	// events: {
	// 	"click #deleteShoppingItems": "delete",
	// 	"click .checkBox": "toggle"
	// },

	initialize: function() {
		this.render();
	},

	render: function() {
		var that = this;
		var template = Handlebars.compile($("#shopping-list-item").html());
		this.$el.html(template(this.model.toJSON()));
		console.log("rendered");

		$("#deleteShoppingItems").on("click", function() {
			//$(".toDelete").remove();
			APP.shoppingList.remove(that.model.cid);
			console.log("deleted?");
		});

	}

});