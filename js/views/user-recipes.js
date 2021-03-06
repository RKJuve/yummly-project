// collection view
APP.UserRecipesView = Backbone.View.extend({
	el: "#bin",
	initialize: function() {
		this.render();
	},
	render: function() {
		this.collection.each(function(model){
			var userRecipeView = new APP.UserRecipeView({model:model});
			this.$el.append(userRecipeView.el);
		}, this);
		this.$el.wrapInner("<ul  />")
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