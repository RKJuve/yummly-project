APP.client = new Dropbox.Client({key: "i401wu5aqq6zpwk"});
APP.userRecipeTable;
APP.inventoryTable;
APP.DBXsync = false;

function DBXtoBB(){


	//syncing user recipes
	APP.userRecipes = new APP.UserRecipes;
	APP.userRecipeTable.query().forEach(function(val, index, array){
		APP.globalCID = val._rid;
		var temp = val.getFields();
		for (key in temp) {
			if (key === "ingredients") {
				temp[key] = temp[key]._array();
			}
		}
		APP.userRecipes.add(new APP.UserRecipe(temp));
	})



	// user recipes event listeners
	APP.userRecipes.on("add", function(model, collection, options){
		APP.userRecipeTable.getOrInsert(model.cid, model.toJSON());
	});
	APP.userRecipes.on("remove", function(model, collection, options){
		APP.userRecipeTable.get(model.cid).deleteRecord();
	});
	APP.userRecipes.on("change", function(model, options){
		APP.userRecipeTable.get(model.cid).update(model.changed);
	});


	// sync done
	APP.DBXsync = true;
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
		APP.userRecipeTable = datastore.getTable('userRecipe');
		DBXtoBB();
	});


	function recipeTableinsert(model){
		APP.userRecipeTable.insert(model.toJSON());
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
