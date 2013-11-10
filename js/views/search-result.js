
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
	render: function() {
		this.$el.html("<h3>"+this.model.get('id')+"</h3>");
		//$(this.el).append(this.$el);
	},
});