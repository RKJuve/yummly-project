APP.UserRecipeDetailsView = Backbone.View.extend({
	el: "#bin",
	initialize: function() {
		this.render();
	},
	editMode: function() {
		var navTarget = "editRecipe/"+this.model.cid;
		console.log(navTarget);
		return APP.router.navigate(navTarget, {trigger: true});
	},
	render: function() {
		var that = this;
		$("#edit").off();
		var template = Handlebars.compile($("#user-recipe-details-template").html());
		this.$el.html(template(this.model.toJSON()));
		$("#edit").on("click", function(){
			that.editMode();
		})
	}
});