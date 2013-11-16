APP.InventoryList = Backbone.View.extend({
	el: ".container",
	tagname: "ul",
	className: "inventory-list",
	render: function() {
		this.collection.each(function(model) {
			APP.inventoryItemView = new APP.InventoryItemView({model: model});
			this.$el.append(APP.inventoryItemView.render().el);
		}, this);
		return this;
	}

});