APP.client = new Dropbox.Client({key: "i401wu5aqq6zpwk"});
APP.recipeTable;
APP.inventoryTable;

function DBXtoBB(){
	APP.userRecipes = new APP.UserRecipes;
	APP.recipeTable.query().forEach(function(val, index, array){
		var temp = val.getFields();
		for (key in temp) {
			if (key === "ingredients") {
				temp[key] = temp[key]._array();
			}
		}
		APP.userRecipes.add(new APP.UserRecipe(temp));
	})
	APP.userRecipes.on("add", function(model, collection, options){
		APP.recipeTable.getOrInsert(model.cid, model.toJSON());
	});
	APP.userRecipes.on("remove", function(model, collection, options){
		APP.recipeTable.get(model.cid).deleteRecord();
	});
	APP.userRecipes.on("change", function(model, options){
		APP.recipeTable.get(model.cid).update(model.changed);
	});
}

$(document).ready(function() {

	$(".container").hide();
	$("html").css("background-color", "#a9e160");

	$(".login").click(function(e) {
		e.preventDefault();
		APP.client.authenticate();
	});

	// Try to finish OAuth authorization.
	APP.client.authenticate({interactive: false}, function (error) {
	  if (error) {
	    alert('Authentication error: ' + error);
	  }
	});

	if (APP.client.isAuthenticated()) {
	  console.log('auth sucessful');
	  $(".login").hide();
	  $(".welcome").hide();
	  $("html").css("background-color", "#F3F3F3");
	  $(".container").show();
	  APP.router.navigate("home", {trigger:true});
	}

	var datastoreManager = APP.client.getDatastoreManager();
	datastoreManager.openDefaultDatastore(function (error, datastore) {
	    if (error) {
	        alert('Error opening default datastore: ' + error);
	    }

	    // Now you have a datastore. The next few examples can be included here.
		APP.recipeTable = datastore.getTable('recipe');
		DBXtoBB();
	});


	function recipeTableinsert(model){
		APP.recipeTable.insert(model.toJSON());
	};
	function inventoryTableInsert(model) {
		APP.inventoryTable.insert(model.toJSON());
	};

	APP.client.getAccountInfo(function(error, accountInfo) {
	  if (error) {
	    return showError(error);  // Something went wrong.
	  }

	   // alert("Hello, " + accountInfo.name + "!");

	   
	});

});
