APP.UserRecipeDetailsView = Backbone.View.extend({
	el: "#bin",
	initialize: function() {
		this.render();
	},
	render: function() {
		var template = Handlebars.compile($("#user-recipe-details-template").html());
		this.$el.html(template(this.model.toJSON()));
		console.log("rendered");
	}
});