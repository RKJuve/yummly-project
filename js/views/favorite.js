APP.FavoriteView = Backbone.View.extend({

	tagName: "li",
	className: "favorite-recipe",

	template: Handlebars.compile("<a>{{name}}</a>"),

	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	}

});