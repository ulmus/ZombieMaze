/**
 * @author Jens Alm
 * @copyright ProReNata AB 2013
 * @description
 */
(function () {
	"use strict";
	ZM.Views.MazeActionView =  Backbone.Marionette.View.extend({

		events: {
			"click .action-add-maze" : "addMaze"
		},

		addMaze: function(event){
			var collection = this.collection;
			var model = new ZM.Models.MazeModel();
			model.save().done(function(){
				collection.add(model, {success: function(){
					ZM.app.vent.trigger("show:modelForm", {
						model: collection.get(model.id),
						header: "Maze"
					})
				}});
			});
			event.preventDefault();
		}
	})

}());