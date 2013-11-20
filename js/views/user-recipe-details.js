APP.UserRecipeDetailsView = Backbone.View.extend({
	el: "#bin",
	initialize: function() {
		this.render();
	},
	events: {
		"click button": "editMode"
	},
	editMode: function() {
		var navTarget = "editRecipe/"+this.model.cid;
		APP.router.navigate(navTarget, {trigger: true});
	},
	render: function() {
		var template = Handlebars.compile($("#user-recipe-details-template").html());
		this.$el.html(template(this.model.toJSON()));
	}
});