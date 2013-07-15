/**
 * @author Jens Alm
 * @copyright ProReNata AB 2013
 * @description
 */
(function () {
	"use strict";
	ZM.Views.ClickItemView = Backbone.Marionette.ItemView.extend({

		initialize: function(){
			this.listenTo(this.model, "change:name", function(){
				this.render();
			}, this)
		},

		triggers: {
			"click" : "click:item"
		}

	})
}());