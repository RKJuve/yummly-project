APP.InventoryList = Backbone.View.extend({

	el: "#bin",
	tagname: "ul",
	className: "inventory-list",

	initialize: function() {
		this.render();
	},

	render: function() {

		var inventoryTemplate = $("#inventory-list").html();
		inventoryTemplate = Handlebars.compile(inventoryTemplate);
		this.$el.html(inventoryTemplate);

		this.collection.each(function(model) {
			APP.inventoryItemView = new APP.InventoryItemView({model: model});
			this.$el.append(APP.inventoryItemView.render().el);
		}, this);

		return this;
	}

});