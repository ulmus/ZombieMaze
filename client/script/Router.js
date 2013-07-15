/**
 * @author Jens Alm
 * @copyright ProReNata AB 2013
 * @description
 */
(function () {
	"use strict";

	ZM.Router = Backbone.Router.extend({

		routes: {
			"maze/:id/" : "maze"
		},

		maze: function(id){
			ZM.app.vent.trigger("show:maze", id);
		}
	})

}());