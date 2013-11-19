var client = new Dropbox.Client({key: "i401wu5aqq6zpwk"});

// Try to finish OAuth authorization.
client.authenticate({interactive: false}, function (error) {
    if (error) {
        alert('Authentication error: ' + error);
    }
});

if (client.isAuthenticated()) {
    console.log('auth sucessful');
}

client.getAccountInfo(function(error, accountInfo) {
  if (error) {
    return showError(error);  // Something went wrong.
  }

  alert("Hello, " + accountInfo.name + "!");
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