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
		var template = Handlebars.compile($("#shopping-list-item").html());
		this.$el.html(template(this.model.toJSON()));
		console.log("rendered");
	}

	// toggle: function(event) {
	// 	this.model.completed = "completed";
	// },

	// delete: function(event) {

	// }

});