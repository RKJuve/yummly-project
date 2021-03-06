APP.InventoryListView = Backbone.View.extend({

	el: "#bin",

	initialize: function() {
		this.render();
	},

	addToInventory: function() {
		var input = {
			rest: document.forms["inventory-form"]["inventory-item-name"].value,
			scalar: document.forms["inventory-form"]["quantity"].value
		};
		APP.inventory.add(input);
		APP.router.inventory();
	},

	render: function() {

		var that = this;

		this.collection.each(function(model) {
			var inventoryItemView = new APP.InventoryItemView({model: model});
			this.$el.append(inventoryItemView.el);
		}, this);

		this.$el.wrapInner("<ul />");

		var inventoryTemplate = $("#inventory-list").html();
		inventoryTemplate = Handlebars.compile(inventoryTemplate);
		this.$el.prepend(inventoryTemplate);

		$("form").on("submit", function(event) {
			event.preventDefault();
			that.addToInventory();
			console.log("done");
		});
	}

});