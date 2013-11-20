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
	initialize: function() {
		this.render();
	},
	render: function () {
		var template = Handlebars.compile($("#user-recipe-template").html());
		this.$el.html(template(this.model.toJSON()));
	}
});

/*
//collection view
APP.SearchResultsView = Backbone.View.extend({
	el: "#bin",
	tagName: 'ul',
	render: function() {
		this.collection.each(function(model){
			APP.searchResultView = new APP.SearchResultView({model:model});
			this.$el.append(APP.searchResultView.el);
		}, this);
		$('#form').submit(function(e){
			e.preventDefault;
			APP.router.navigate("search", {trigger: true});
		});
	},

});

//model view
APP.SearchResultView = Backbone.View.extend({
	tagName:'li',
	initialize: function(){
		this.render();
	},
	events: {
		"click": "viewRecipeDetails"
	},
	viewRecipeDetails: function() {
		var navTarget = "search/"+this.model.get('id');
		APP.router.navigate(navTarget, {trigger: true});
	},
	render: function() {
		var source = $("#search-result-template").html();
		var template = Handlebars.compile(source);
		var context = this.model.toJSON();
		var html = template(context);
		this.$el.html(html);
	},
});
*/