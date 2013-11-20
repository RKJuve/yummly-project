APP.InventoryItemView = Backbone.View.extend({

  tagName: "li",
  className: "list-item",
  template: Handlebars.compile("<a>{{ name }}</a>"),
  render: function() {
    var attributes = this.model.toJSON();
    this.$el.html(this.template(attributes));
    return this;
  }
});