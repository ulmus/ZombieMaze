/**
 * @author Jens Alm
 * @copyright ProReNata AB 2013
 * @description
 */
(function () {
	"use strict";
	ZM.Views.ZombieView = Backbone.Marionette.ItemView.extend({

		modelEvents: {
			"change:direction": "rotateZombie"
		},

		moveToTile: function(tile){
			if (tile.moveInto(this)){
				this.model.set({
					row: tile.get("row"),
					col: tile.get("col")
				});
			}
		},

		rotateZombie: function(){

		},

		showOnTile: function(){}
	})



}());