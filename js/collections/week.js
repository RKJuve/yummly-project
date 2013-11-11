APP.WeeklySchedule = Backbone.Collection.extend({
	model: APP.DayOfWeek,
	url: "/week"
});