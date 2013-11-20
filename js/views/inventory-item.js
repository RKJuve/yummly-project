APP.InventoryItemView = Backbone.View.extend({
  tagName: "li",
  className: "list-item",

  render: function() {

  	var itemTemplate = $("#inventory-list-item").html();
  	var attributes = this.model.toJSON();
		itemTemplate = Handlebars.compile(itemTemplate);
		this.$el.html(itemTemplate(attributes));
    return this;
  }
});