APP.DayOfWeek = Backbone.Model.extend({
	defaults: {
		dayofWeek: undefined,
		date: "Month, Day, Year",
		weekend: false,
		mealAlreadyPlanned: false,
		whichRecipePlanned: undefined,
		nightOffFromCooking: false,
		suggestedMealsBasedOffInventory: [ ]
	}
});

// A day of the week, which would be found in the weekly schedule.
// Defaults:
// What day of the week is it?
// What's the date of that day?
// Is it the weekend?
// Do you have a meal planned for that day already?
// If so, what recipe?
// Are you taking a night off from cooking?
// If you have no meal planned, here are some suggestions for you,
// based off of your current inventory list.