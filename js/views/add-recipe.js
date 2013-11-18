APP.AddRecipeView = Backbone.View.extend({
	el: "#bin",
	initialize: function() {
		this.render();
	},
	render: function() {
		console.log("add recipe render");
		this.$el.html('<form><input type="text"></input><input type="text"></input><input type="text"></input></form>');
	}
});