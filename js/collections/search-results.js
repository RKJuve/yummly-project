APP.SearchResults = Backbone.Collection.extend({
	model: APP.SearchResult,
	url: "https://api.yummly.com/v1/api/recipes?_app_id=a1690f7a&_app_key=ce9b21d8ad6d145ed0dce4da2e9754a4&callback=?",
	parse: function(res){
		return res.matches;
	}
});