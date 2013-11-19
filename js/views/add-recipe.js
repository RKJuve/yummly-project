APP.AddRecipeView = Backbone.View.extend({
	el: "#bin",
	initialize: function() {
		this.render();
	},
	submit: function(e) {
		e.preventDefault;
		console.log('form submit');
		
	},
	render: function() {
		var source = $("#user-recipe-form").html();
		template = Handlebars.compile(source); 
		this.$el.html(template);
		$('#addLine').on("click", function(){
			$('#addLine').before('<input type="text" id="ingredient_1" placeholder="..."/>');
		});
		$('#recipe-form').submit(function(e){
			e.preventDefault;
			console.log(e);
		});
	}
});