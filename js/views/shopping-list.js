APP.ShoppingListView = Backbone.View.extend({

	el: "#bin",

	initialize: function() {
		this.render();
	},

	addToShoppingList: function() {
		var input = {
			quantity: document.forms["shopping-form"]["quantity"].value,
			name: document.forms["shopping-form"]["name"].value
		};
		APP.shoppingList.add(input);
		APP.router.navigate("shopping", {trigger: true});
	},

	render: function() {

		var that = this;

		this.collection.each(function(model) {
			var shoppingListItemView = new APP.ShoppingListItemView({ model: model});
			this.$el.append(shoppingListItemView.el);
		}, this);

		this.$el.wrapInner("<ul />");

		var shoppingTemplate = $("#shopping-list").html();
		shoppingTemplate = Handlebars.compile(shoppingTemplate);
		this.$el.prepend(shoppingTemplate);

		$("form").on("submit", function(event) {
			event.preventDefault();
			that.addToShoppingList();
		});
	}
});