APP.UserRecipeEditView = Backbone.View.extend({
	el: "#bin",
	initialize: function() {
		this.render();
	},
	updateRecipe: function() {
		console.log("updateRecipe");
		var temp = {name: document.forms["recipe-form"]["recipeName"].value, ingredients:[]};
		for (var i=0; i<this.ingredientCount; i++){
			temp.ingredients[i] = document.forms["recipe-form"]["ingredient_"+(i)].value;
		}
		if (!APP.userRecipes) {
			APP.userRecipes = new APP.UserRecipes();
		}
		this.model.set(temp);
		APP.router.navigate("userRecipes", {trigger:true});
	},
	ingredientCount: null,
	render: function() {
		var that = this;
		var template = Handlebars.compile($("#user-recipe-edit-template").html());
		this.$el.html(template(this.model.toJSON()));

		this.ingredientCount = this.model.get("ingredients").length;

		$('#addLine').on("click", function(){
			$('#addLine').before('<input type="text" id="ingredient_'+ that.ingredientCount +'" placeholder="..."/>');
			that.ingredientCount++;
		});		
		$('#save').on("click",function(){
			that.updateRecipe();
		});
		$('#destroy').on("click",function(){
			var r = confirm("You sure about that?")
			if (r == true) {
				APP.userRecipes.remove(that.model.cid);
				APP.router.navigate("userRecipes", {trigger:true})		
			} else {
				return;
			}
		});
	}
});