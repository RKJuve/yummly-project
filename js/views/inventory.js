APP.InventoryListView = Backbone.View.extend({

	el: "#inventory",

	initialize: function() {
		this.render();
	},

	addToInventory: function() {
		var input = {
			name: document.forms["inventory-form"]["inventory-item-name"].value,
			quantity: document.forms["inventory-form"]["quantity"].value
		};
		if (!APP.inventory) {
			APP.inventory = new APP.Inventory();
		}
		APP.inventory.add(new APP.Inventory(input));
	},

	render: function() {

		var that = this;

		var inventoryTemplate = $("#inventory-list").html();
		inventoryTemplate = Handlebars.compile(inventoryTemplate);
		this.$el.before(inventoryTemplate);

		$("form").on("submit", function(event) {
			event.preventDefault();
			that.addToInventory();
			console.log("done");
		});

		this.collection.each(function(model) {
			APP.inventoryItemView = new APP.InventoryItemView({model: model});
			this.$el.append(APP.inventoryItemView.el);

		}, this);

		return this;

	}

});