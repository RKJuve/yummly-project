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

});