/**
 * @author Jens Alm
 * @copyright ProReNata AB 2013
 * @description
 */
(function () {
	"use strict";
	ZM.Views.MazeListView = Backbone.Marionette.CollectionView.extend({

		itemView: ZM.Views.ClickItemView,

		initialize: function(){

			this.listenTo(this, "itemview:click:item", function(options){
				ZM.app.vent.trigger("show:maze", options.model);
				event.preventDefault();
			}, this);

			this.listenTo(ZM.app.vent, "show:maze", function(maze){
				this.$("li").removeClass("active");
				var itemView = this.children.findByModel(maze);
				if (itemView){
					itemView.$el.addClass("active");
				}
			})
		},

		itemViewOptions: {
			tagName: "li",
			template: "#template-maze-list-item"
		}

	});
}());