//collection view
APP.SearchResultsView = Backbone.View.extend({
	el: "#bin",
	tagName: 'ul',
	render: function() {
		this.collection.each(function(model){
			APP.searchResultView = new APP.SearchResultView({model:model});
			this.$el.append(APP.searchResultView.el);
		}, this);
	},

});

//model view
APP.SearchResultView = Backbone.View.extend({
	tagName:'li',
	initialize: function(){
		this.render();
	},
	events: {
		"click a": "viewRecipeDetails"
	},
	viewRecipeDetails: function() {
		var navTarget = "search/"+this.model.get('id');
		APP.router.navigate(navTarget, {trigger: true});
	},
	render: function() {
		this.$el.html("<h3><a>"+this.model.get('id')+"</a></h3>");
	},
});