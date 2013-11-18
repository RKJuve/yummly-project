APP.AddRecipeView = Backbone.View.extend({
	el: ".main",
	initialize: function() {
		this.render();
	},
	render: function() {
		this.$el.html('<form><input type="text"></input><input type="text"></input><input type="text"></input></form>');
	}
});