APP.DayOfWeekView = Backbone.View.extend({

	tagName: "li",
	className: "day-of-week",

	template: Handlebars.compile("<div class='day-of-week-inner'>{{day}}</div>"),

	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	}

});