APP.HomeView = Backbone.View.extend({
	el: '#bin',

	initialize: function() {
		this.render()
	},

	render: function() {
		var homeTemplate = $("#search-bar").html();
		var template = Handlebars.compile(homeTemplate);
		this.$el.html(template);

	}
});
