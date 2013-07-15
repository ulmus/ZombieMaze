/**
 * @author Jens Alm
 * @copyright ProReNata AB 2013
 * @description
 */
(function () {
	"use strict";
	ZM.Collections.TileCollection = Parse.Collection.extend({

		comparator: function(model1, model2){
			if (model1.get("row") > model2.get("row")){
				return -1
			} else if (model2.get("row") > model1.get("row")){
				return 1
			} else {
				if (model1.get("col") > model2.get("col")){
					return -1
				} else if (model2.get("col") > model1.get("col")){
					return 1
				} else {
					return 0
				}
			}
		},

		getRowModels: function(row){
			return this.filter(function(model){return model.get("row") === row})
		},

		getColModels: function(col){
			return this.filter(function(model){return model.get("row") === row})
		},

		getModelByPosition: function(row, col){
			return this.find(function(model){return model.get("row") === row && model.get("col") === col});
		},

		getRowData: function(row){
			var data = [];
			_.each(self.getRowModels(row), function(model){
				data.push(model.toJSON())
			});
			return data;
		},

		getColData: function(col){
			var data = [];
			_.each(self.getColModels(col), function(model){
				data.push(model.toJSON())
			});
			return data;
		}

	})

}());