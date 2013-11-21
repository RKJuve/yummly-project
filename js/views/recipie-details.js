APP.RecipieDetailsView = Backbone.View.extend({
	el: '#searchDeets',
	tagName: 'p',
	events: {
		"click #saveToList": "saveToList"
	},
	render: function() {
		var template = Handlebars.compile($("#search-details-template").html());
		this.$el.html(template(this.model.toJSON()));
	},
	saveToList: function(){
		this.model.saveToList();
	}
});