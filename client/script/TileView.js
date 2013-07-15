/**
 * @author Jens Alm
 * @copyright ProReNata AB 2013
 * @description
 */
(function () {
	"use strict";

	ZM.Views.TileView = Backbone.Marionette.ItemView.extend({

		template: "#template-tile",
		className: "tile",

//		events: {
//			"click .action-tile-setType" : "clickSetType"
//		},

		triggers: {
			"click" : "click"
		},

		modelEvents: {
			"change:type" : "render"
		}

//		onRender: function(){
//			var popoverTemplate = Backbone.Marionette.TemplateCache.get("#template-tile-popover");
//			this.$el.popover({
//				title: "Tile " + this.model.get("row") + ":" + this.model.get("col"),
//				html: true,
//				content: popoverTemplate(this.model.toJSON()),
//				container: this.$el
//			});
//		},

//		clickSetType: function(event){
//			var type = $(event.currentTarget).data("tileType");
//			this.model.set({"type" : type})
//		}

	})

}());