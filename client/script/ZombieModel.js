/**
 * @author Jens Alm
 * @copyright ProReNata AB 2013
 * @description
 */
(function () {
	"use strict";
	ZM.Models.ZombieModel = Backbone.RelationalModel.extend({

		defaults: {
			direction: 0,
			row: 0,
			col: 0
		},

		initialize: function(){
			this.tile = null;
		}
	})
}());