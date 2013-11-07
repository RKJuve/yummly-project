
//// yummly-list namespace
var YL = {

//// YL scoped variables
// yummly recipie search api url and keys	
	url: 'http://api.yummly.com/v1/api/recipes?_app_id=a1690f7a&_app_key=ce9b21d8ad6d145ed0dce4da2e9754a4',

//// set up functions
// jsonp callback function
	CBF: function(data) {
			$('#output').html(JSON.stringify(data, null, '\t'));
		},

// issues GET requests to the yummly search API with a query string
 yumGet: function(query) {

			$.ajax({
				type: 'GET',
				url: YL.url,
				data: {q:query},
				dataType: 'jsonp',
				jsonpCallback: 'YL.CBF',
				success: function(data){
					console.log("ajax success function, NOT jsonpCallback");
				},
				error: function(data, data2) {
					console.log(data);
					console.log(data2);
				}
			});
		},
	};


// basic jQuery stuff
$(document).ready(function(){

	$('#button').click(function(){
		YL.yumGet($('#query').val());
	});

});		