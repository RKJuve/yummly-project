APP.SearchView = Backbone.View.extend({

	el: "#bin",
	tagname: "div",
	className: "search-bar",

	initialize: function() {
		this.render();
	},

	render: function() {
		var searchTemplate = $("#search-bar").html();
		searchTemplate = Handlebars.compile(searchTemplate);
		this.$el.html(searchTemplate);
	}
});