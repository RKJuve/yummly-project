APP.HeaderView = Backbone.View.extend({
	el: "#headerh2",
	initialize: function(){
		console.log("header initialize");
	},
	render: function(route) {
		this.$el.html(route);
	}
});