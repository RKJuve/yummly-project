var client = new Dropbox.Client({key: "i401wu5aqq6zpwk"});


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



	client.getAccountInfo(function(error, accountInfo) {
	  if (error) {
	    return showError(error);  // Something went wrong.
	  }

	 // alert("Hello, " + accountInfo.name + "!");
	});

	var recipeTable;

	var datastoreManager = client.getDatastoreManager();
	datastoreManager.openDefaultDatastore(function (error, datastore) {
	    if (error) {
	        alert('Error opening default datastore: ' + error);
	    }

	    // Now you have a datastore. The next few examples can be included here.
		recipeTable = datastore.getTable('recipe');


	});
	function recipeTableinsert(model){
	recipeTable.insert(model.toJSON());
	}

	////////////////////
	// INVENTORY ITEMS
	////////////////////

	var inventoryTable;

//	inventoryTable = datastore.getTable("inventoryItems");

	function insertInventoryItem(text) {
		inventoryTable.insert({
			itemName: text,
			created: new Date(),
			addedToShoppingList: false,
			outOfItem: false
		});
	}

	// function updateInventoryList() {
	// 	$(".inventory").empty();

	// 	//var records = inventoryTable.query();

	// 	// records.sort(function (taskA, taskB) {
	// 	// 	if (taskA.get("created") < taskB.get("created")) return -1;
	// 	// 	if (taskA.get("created") > taskB.get("created")) return 1;
	// 	// 	return 0;
	// 	// });

	// 	// for (var i = 0; i < records.length; i++) {
	// 	// 	var record = records[i];
	// 	// 	$(".inventory-item").append(
	// 	// 		renderInventoryItem(record.getId(),
	// 	// 			record.get("outOfItem"),
	// 	// 			record.get("itemName")));
	// 	// }

	// 	//addListeners();
	// }

	//updateInventoryList();

	//datastore.recordsChanged.addListener(updateInventoryList);



});