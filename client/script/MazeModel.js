/**
 * @author Jens Alm
 * @copyright ProReNata AB 2013
 * @description
 */
(function () {
	"use strict";

	ZM.Models.MazeModel = Parse.Object.extend({

		className: "Maze",

		defaults: {
			name: "Maze 1",
			rows: 13,
			cols: 13,
			defaultTileType: "PASS"
		},

		schema: {
			"name": {
				type: "Text"
			},
			"rows" : {
				type: "Text",
				dataType: "number"
			},
			"cols" : {
				type: "Text",
				dataType: "number"
			},
			"defaultTileType" : {
				type: "Select",
				options: ["PASS", "WALL", "TRAP", "START", "FINISH"]
			}
		},

		initialize: function(){
			var self = this;
			self.setupTiles();
			self.on("destroy", function(){
				self.get("tiles").each(function(tile){
					tile.destroy()
				})
			})
		},


		setupTiles: function(){
			var self = this;
			self.get("tiles").fetch({query: {"maze" : self.id}, limit: 500}).then(function(){
				for (var row=0;  row < self.get("rows"); row++){
					for (var col=0; col < self.get("cols"); col++) {
						var tile = self.get("tiles").getModelByPosition(row, col);
						if (!tile){
							tile = new ZM.Models.TileModel({
								maze: self,
								row: row,
								col: col
							});
							tile.save();
						}
						//self.get("tiles").add(tile);
					}
				}
			});
		},

		showForm: function(){
		}
	})

}());