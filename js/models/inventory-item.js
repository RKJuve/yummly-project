APP.InventoryItem = Backbone.Model.extend({
	defaults: {
		name: "undefined",
		quantity: 0,
		staple: false,
		seasonal: false,
		perishable: false
	}
});

// Sample inventory item
// Defined defaults:
// Name = name of item,
// Quantity = number of item in stock,
// Staple = is this a common ingredient
// used in many recipes?
// Seasonal = is this an ingredient that
// can only be purchased fresh in certain
// seasons?