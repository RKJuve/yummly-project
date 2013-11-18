var client = new Dropbox.Client({key: "i401wu5aqq6zpwk"});


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
  $(".content").show();
}

