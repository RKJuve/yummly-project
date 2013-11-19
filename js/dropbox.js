var client = new Dropbox.Client({key: "i401wu5aqq6zpwk"});
var recipeTable;
var inventoryTable;

$(document).ready(function() {

		$(".container").hide();
		$("html").css("background-color", "#a9e160");

		$(".login").click(function(e) {
			e.preventDefault();
			client.authenticate();
		});

		// Try to finish OAuth authorization.
		client.authenticate({interactive: false}, function (error) {
		  if (error) {
		    alert('Authentication error: ' + error);
		  }
		});

		if (client.isAuthenticated()) {
		  console.log('auth sucessful');
		  $(".login").hide();
		  $(".welcome").hide();
		  $("html").css("background-color", "#F3F3F3");
		  $(".container").show();
		}

	var datastoreManager = client.getDatastoreManager();
	datastoreManager.openDefaultDatastore(function (error, datastore) {
	    if (error) {
	        alert('Error opening default datastore: ' + error);
	    }

	    // Now you have a datastore. The next few examples can be included here.
		recipeTable = datastore.getTable('recipe');
		inventoryTable = datastore.getTable('inventoryItem');
	});


	function recipeTableinsert(model){
		recipeTable.insert(model.toJSON());
	};
	function inventoryTableInsert(model) {
		inventoryTable.insert(model.toJSON());
	};

	APP.client.getAccountInfo(function(error, accountInfo) {
	  if (error) {
	    return showError(error);  // Something went wrong.
	  }

	  // alert("Hello, " + accountInfo.name + "!");
	});

});
