// collection view
APP.UserRecipesView = Backbone.View.extend({
	el: "#userRecipes",
	initialize: function() {
		this.render();
	},
	render: function() {
		this.collection.each(function(model){
			var userRecipeView = new APP.UserRecipeView({model:model});
			this.$el.append(userRecipeView.el);
		}, this);
		this.$el.wrap("<ul />");
		this.$el.append("<button class='addRecipe' type='button'>Add a new recipe</button>");
		$("button.addRecipe").on("click", function(){
			APP.router.navigate("addRecipe", {trigger: true});
		});
	}
});

// model view
APP.UserRecipeView = Backbone.View.extend({
	tagName: "li",
	events: {
		"click .editRecipe": "viewDetails",
		"click .addToPlanned": "addToPlanned"
	},
	viewDetails: function() {
		var navTarget = "userRecipes/"+this.model.cid;
		APP.router.navigate(navTarget, {trigger: true});
	},
	addToPlanned: function() {
		this.model.saveToList();
	},
	initialize: function() {
		this.render();
	},
	render: function () {
		var template = Handlebars.compile($("#user-recipe-template").html());
		this.$el.html(template(this.model.toJSON()));
	}
});