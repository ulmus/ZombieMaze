/**
 * @author Jens Alm
 * @copyright ProReNata AB 2013
 * @description
 */
(function () {
	"use strict";

	ZM.app = new Backbone.Marionette.Application({
	});

	ZM.app.addRegions({
		mazeDisplay : "#maze-display"
	});

	ZM.app.addInitializer(function(){

		this.mazeCollection = new ZM.Collections.MazeCollection();

		this.mazeCollection.fetch();

		this.mazeListView = new ZM.Views.MazeListView({
			collection : this.mazeCollection,
			el: "#maze-list"
		}).render();

		this.mazeActionView = new ZM.Views.MazeActionView({
			collection: this.mazeCollection,
			el: "#maze-actions"
		}).render();

		this.listenTo(this.vent, "show:maze", function(maze){
			if (maze) {
				var mazeView = new ZM.Views.MazeView({
					model: maze,
					collection: maze.get("tiles")
				});
				this.mazeDisplay.show(mazeView);
			}
		});

		this.listenTo(this.vent, "show:modelForm", function(options){
			options || (options = {});
			_(options).defaults({
				models: null,
				header: "Model",
				onCommit: function(options){}
			});
			var dialogHTMLtemplate = Backbone.Marionette.TemplateCache.get("#template-dialog");
			var form = new Backbone.Form({model:options.model}).render();
			var dialogHTML = dialogHTMLtemplate({
				header: options.header
			});
			var dialogDiv = $("<div></div>");
			dialogDiv.appendTo("body");
			dialogDiv.html(dialogHTML);

			dialogDiv.find(".modal-body").append(form.el);
			var modal = dialogDiv.find(".modal");
			modal.modal();
			modal.one("hidden", function(){
				form.off();
				form.remove();
				dialogDiv.remove();
			});
			dialogDiv.find(".modal-footer .btn-primary").click(function(){
				if (!form.validate()){
					form.commit();
					options.onCommit(options);
					modal.modal("hide");
				}
			})
		});

		this.listenTo(this.vent, "edit", function(model){

		});

	});
	ZM.app.start();
	ZM.app.mazeCollection.fetch();

}());