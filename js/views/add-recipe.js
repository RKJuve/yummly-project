APP.AddRecipeView = Backbone.View.extend({
	el: "#bin",
	initialize: function() {
		this.render();
	},
	saveRecipe: function() {
		var temp = {name: document.forms["recipe-form"]["recipeName"].value, ingredients:[]};
		for (var i=0; i<this.ingredientCount; i++){
			temp.ingredients[i] = document.forms["recipe-form"]["ingredient_"+(i)].value;
		}
		if (!APP.userRecipes) {
			APP.userRecipes = new APP.UserRecipes();
		}
		APP.userRecipes.add(new APP.UserRecipe(temp));
	},
	ingredientCount: 1,
	render: function() {
		var that = this;

		var template = Handlebars.compile($("#user-recipe-form").html()); 
		this.$el.html(template);

		$('#addLine').on("click", function(){
			$('#addLine').before('<input type="text" id="ingredient_'+ that.ingredientCount +'" placeholder="..."/>');
			that.ingredientCount++;
		});
		
		$('#save').on("click",function(){
			that.saveRecipe();
		});
	}
});