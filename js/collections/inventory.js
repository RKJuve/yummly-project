APP.Inventory = Backbone.Collection.extend({
	model: APP.InventoryItem,
	inventory: "/inventory"
});