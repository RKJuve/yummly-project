//collection view
APP.SearchResultsView = Backbone.View.extend({
	el: "#bin",
	tagName: 'ul',
	render: function() {
		this.collection.each(function(model){
			APP.searchResultView = new APP.SearchResultView({model:model});
			this.$el.append(APP.searchResultView.el);
			this.$el.find("form").on("submit", function(event) {
				console.log("fire");
				//event.preventDefault();
				APP.router.search();
				APP.router.navigate("search", {trigger: true});
			});
		}, this);
	}

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