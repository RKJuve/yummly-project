APP.RecipieDetailsView = Backbone.View.extend({
	el: '#bin',
	tagName: 'p',
	render: function() {
		this.$el.html(this.model.get("ingredientLines"));
	}
});