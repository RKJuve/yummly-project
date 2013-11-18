APP.PlannedRecipies = Backbone.Collection.extend({
	model: APP.RecipieDetails,
	initialize: function() {
		this.bindEvents();
	},
	bindEvents: function() {
		this.on('add', function(model) {
			model.mux();
		});
	}
});