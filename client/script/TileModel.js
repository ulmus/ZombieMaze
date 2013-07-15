/**
 * @author Jens Alm
 * @copyright ProReNata AB 2013
 * @description
 */
(function () {
	"use strict";
	ZM.Models.TileModel = Parse.Object.extend({

		className: "Tile",

		defaults: function(){
			return {
				type: "PATH", //choices: PATH, WALL, TRAP, START, FINISH,
				row: 0,
				col: 0
			}
		},

		schema: function(){
			return {
				"type" : {
					type: "Select",
					options: ["PATH", "WALL", "TRAP", "START", "FINISH"]
				},
				"row" : {
					type: "Text",
					dataType: "number"
				},
				"col" : {
					type: "Text",
					dataType: "number"
				}
			}
		},

		moveInto: function(){

		}
	});
}());