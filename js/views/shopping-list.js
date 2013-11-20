APP.ShoppingListView = Backbone.View.extend({

	el: "#bin",

	initialize: function() {
		this.render();
	},

	addToShoppingList: function() {
		var input = {
			name: document.forms["shopping-form"]["name"].value,
			quantity: document.forms["shopping-form"]["quantity"].value
		};
		if (!APP.shoppingList) {
			APP.shoppingList = new APP.ShoppingList();
		}
		APP.shopppingList.add(new APP.ShoppingList(input));
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
		return this;
	}
});