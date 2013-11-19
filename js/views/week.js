APP.WeeklyScheduleView = Backbone.View.extend({

	el: "#bin",
	tagName: "ul",
	className: "week",

	render: function() {
		this.collection.each(function(model) {
			APP.dayOfWeekView = new APP.DayOfWeekView({model: model});
			this.$el.append(APP.dayOfWeekView.render().el);
		}, this);
		return this;
	}

});