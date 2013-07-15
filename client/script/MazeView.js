/**
 * @author Jens Alm
 * @copyright ProReNata AB 2013
 * @description
 */
(function () {
	"use strict";

	ZM.Views.MazeView = Backbone.Marionette.CompositeView.extend({

		template: "#template-maze",
		defaultTileType: "PASS",

		events: {
			"click .action-maze-edit" : "editMaze",
			"click .action-maze-delete" : "deleteMaze",
			"click .action-maze-setDefaultTileType" : "setDefaultType"
		},

		initialize: function(){
			this.listenTo(this.model, "remove", function(){
				this.remove()
			}, this);
			this.listenTo(this.model, "change:name", function(){
				this.render();
			}, this);
			this.listenTo(this, "itemview:click", function(itemView, options){
				this.clickTile(itemView);
			}, this)
		},

		itemViewOptions: function(model){
			var options = {
				className: "tile",
				template: "#template-tile"
			};
			if (model.get("col") == this.model.get("cols")-1){
				options.className += " tile-last-col"
			}
			if (model.get("col") == 0){
				options.className += " tile-first-col"
			}
			if (model.get("row") == this.model.get("rows")-1){
				options.className += " tile-last-row"
			}
			if (model.get("row") == 0){
				options.className += " tile-first-row"
			}
			return options;
		},

		itemView: ZM.Views.TileView,
		itemViewContainer: ".maze",

		editMaze: function(){
			ZM.app.vent.trigger("show:modelForm",{
				model: this.model,
				header: this.model.get("name")
			})
		},

		deleteMaze: function(){
			if (confirm("Delete Maze " + this.model.get("name") + "?")){
				this.model.destroy();

			}
		},

		setDefaultType: function(event){
			this.defaultTileType = $(event.currentTarget).data("type");
			event.preventDefault();
			this.render();
		},

		serializeData: function(){
			var data = Backbone.Marionette.CompositeView.prototype.serializeData.call(this);
			data.defaultTileType = this.defaultTileType;
			return data;
		},

		clickTile: function(itemView){
			itemView.model.save({"type":this.defaultTileType})
		}

	})
}());