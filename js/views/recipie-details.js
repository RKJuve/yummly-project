APP.RecipieDetailsView = Backbone.View.extend({
	el: '#bin',
	tagName: 'p',
	events: {
		"click #saveToList": "saveToList"
	},
	render: function() {
		this.$el.html(this.model.get("ingredientLines")+"<br><br><button id='saveToList'>save to list</button>");
	},
	saveToList: function(){
		this.model.saveToList();
	}
});