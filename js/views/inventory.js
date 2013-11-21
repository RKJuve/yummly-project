APP.InventoryListView = Backbone.View.extend({

	el: "#bin",

	initialize: function() {
		this.render();
	},

	addToInventory: function() {
		var input = {
			name: document.forms["inventory-form"]["inventory-item-name"].value,
			quantity: document.forms["inventory-form"]["quantity"].value
		};
		APP.inventory.add(input);
	},

	render: function() {

		var that = this;

		var inventoryTemplate = $("#inventory-list").html();
		inventoryTemplate = Handlebars.compile(inventoryTemplate);
		this.$el.html(inventoryTemplate);

		$("form").on("submit", function(event) {
			event.preventDefault();
			that.addToInventory();
			console.log("done");
		});

		this.collection.each(function(model) {
			APP.inventoryItemView = new APP.InventoryItemView({model: model});
			this.$el.append(APP.inventoryItemView.el);

		}, this);
		this.$el.wrapInner("<ul />");
	}

});