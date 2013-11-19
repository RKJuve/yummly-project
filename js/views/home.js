APP.HomeView = Backbone.View.extend({

	el: "#bin",

	initialize: function() {
		this.render();
	},

	render: function() {
		var homeTemplate = $("#search-bar").html();
		console.log(homeTemplate);
		var template = Handlebars.compile(homeTemplate);
		$("#bin").html("<h2>test</h2>");
	}
});