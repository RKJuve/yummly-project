APP.PlannedRecipie = Backbone.Model.extend({
	mux: function() {
		var temp = "[";
		for (var i = 0; i < this.model.attributes.ingredientLines.length; i++) {
			if (i = this.model.attributes.ingredientLines.length-1) {
				temp += "'" + this.model.attributes.ingredientLines[i].toString() + "'";
			} else {
			  temp += "'" + this.model.attributes.ingredientLines[i].toString() + "',"	
			}
		};
		temp += "]";
		this.attributes.ingredientLines = temp;
	}
});