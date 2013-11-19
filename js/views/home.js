APP.HomeView = Backbone.View.extend({

	initialize: function() {

		this.render()

	},

	render: function() {
		console.log('sanity check')
		// var homeTemplate = $("#search-bar").html();
		// console.log(homeTemplate);
		// var template = Handlebars.compile(homeTemplate);
		$('#bin').html("<h2>test</h2>");

	}
});