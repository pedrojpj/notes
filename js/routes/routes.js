define("routes", ["underscore", "backbone", "index", "ficha"], function(_, Backbone, vIndex, vFicha) {	

	var AppRouter = Backbone.Router.extend({
	        routes: {
	            "": "indexAction",
	            "note/:id": "noteAction",
	        },  
	        indexAction: function(e) {
	        	new vIndex();
	        },
	        noteAction: function(id) {
	        	new vFicha({ id: id});
	        }
	});
	
	return {
		AppRouter: AppRouter
	}

});