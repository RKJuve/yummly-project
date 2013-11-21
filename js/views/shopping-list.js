APP.ShoppingListView = Backbone.View.extend({

	el: "#shopping",

	initialize: function() {
		this.render();
	},

	addToShoppingList: function() {
		var input = {
			quantity: document.forms["shopping-form"]["quantity"].value,
			name: document.forms["shopping-form"]["name"].value
		};
		APP.shoppingList.add(input);
	},

	render: function() {

		var that = this;

		var shoppingTemplate = Handlebars.compile($("#shopping-list").html());
		this.$el.before(shoppingTemplate);

		$("form").on("submit", function(event) {
			event.preventDefault();
			that.addToShoppingList();
		});

		this.collection.each(function(model) {
			APP.shoppingListItemView = new APP.ShoppingListItemView({
				model: model
			});
			this.$el.append(APP.shoppingListItemView);
		}, this);
		this.$el.wrapInner("<ul />");
		return this;
	}
});