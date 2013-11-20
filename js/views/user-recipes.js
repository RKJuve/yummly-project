// collection view
APP.UserRecipesView = Backbone.View.extend({
	el: "#bin",
	tagName: "ul",
	initialize: function() {
		this.render();
	},
	render: function() {
		this.collection.each(function(model){
			APP.userRecipeView = new APP.UserRecipeView({model:model});
			this.$el.append(APP.userRecipeView.el);
		}, this);
	}
});

// model view
APP.UserRecipeView = Backbone.View.extend({
	tagName: "li",
	events: {
		"click": "viewDetails"
	},
	viewDetails: function() {
		var navTarget = "userRecipes/"+this.model.cid;
		console.log(navTarget);
		APP.router.navigate(navTarget, {trigger: true});
	},
	initialize: function() {
		this.render();
	},
	render: function () {
		var template = Handlebars.compile($("#user-recipe-template").html());
		this.$el.html(template(this.model.toJSON()));
	}
});