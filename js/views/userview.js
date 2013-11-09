APP.View = Backbone.View.extend({
	el: '#bin',
	render: function() {
		console.log('render?');
		$(this.el).html("hello world");
	},
});