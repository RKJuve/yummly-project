APP.Inventory = Backbone.Collection.extend({
	model: APP.InventoryItem,
	url: "/inventory"
});