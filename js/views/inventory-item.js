APP.InventoryItemView = Backbone.View.extend({

	tagName: "li",

	initialize: function() {
		this.render();
	},

	render: function() {
		var template = Handlebars.compile($("#inventory-list-item").html());
		this.$el.html(template(this.model.toJSON()));
		console.log("rendered");
	}
});