APP.ShoppingListView = Backbone.View.extend({

	el: "#bin",

	initialize: function() {
		this.render();
	},

	addToShoppingList: function() {
		var input = {
			scalar: document.forms["shopping-form"]["quantity"].value,
			rest: document.forms["shopping-form"]["name"].value
		};
		APP.shoppingList.add(input);
		APP.router.shoppingList();
	},

	render: function() {

		var that = this;

		this.collection.each(function(model) {
			console.log(model);
			var shoppingListItemView = new APP.ShoppingListItemView({model: model});
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

						$(".checkBox").on("click", function() {
			// $(this).toggleClass("boxChecked");
			// $(this).next("span").toggleClass("grayedOut").next("span").toggleClass("grayedOut");
			// $(this).parent().toggleClass("toDelete");
			// that.model.set({done: true});
			APP.shoppingList.remove(that.model.cid);
			console.log("delete?");
		});
		console.log(APP.shoppingList.get(this.model));//get(that.model.cid));
	}
});