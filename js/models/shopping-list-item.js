APP.ShoppingListItem = Backbone.Model.extend({
	defaults: {
		inventoryItem: false,
		recipeIngredient: false,
		organic: false,
		desiredStore: undefined,
		inSeason: false
	}
});

// A model for an item you have in your
// shopping list.
// Defined defaults are:
// Is this item an item that was in your inventory
// but has run out and you need to replace it?
// Is this an item that is an ingredient in a planned recipe
// for this week?
// Do you want to buy the organic option of this item, if it extists?
// What store would you prefer to buy this item at?
// Is this item in season right now, and therefore
// easy to buy or will it be hard to find?