APP.AddRecipeView = Backbone.View.extend({
	el: "#bin",
	events: {
		"submit form": "submit"
	},
	initialize: function() {
		this.render();
	},
	submit: function() {
		console.log('form submit');
		return false;
	},
	render: function() {
		var source = $("#user-recipe-form").html();
		template = Handlebars.compile(source); 
		this.$el.html(template);
	}
});