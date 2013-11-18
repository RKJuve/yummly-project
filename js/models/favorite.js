APP.Favorite = Backbone.Model.extend({
	defaults: function() {
		return {
			name: null,
			dateFavorited: new Date()
		}
	}
});