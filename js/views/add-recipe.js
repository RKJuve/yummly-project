APP.AddRecipeView = Backbone.View.extend({
	el: "#bin",
	initialize: function() {
		this.render();
	},
	saveRecipe: function() {
		console.log("save recipe from add recipe");
		var temp = {name: document.forms["recipe-form"]["recipeName"].value, ingredients:[]};
		for (var i=0; i<this.ingredientCount; i++){
			temp.ingredients[i] = document.forms["recipe-form"]["ingredient_"+(i)].value;
		}
		APP.userRecipes.add(temp);
		APP.router.navigate("userRecipes", {trigger: true});
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