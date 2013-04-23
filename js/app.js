var notes;
var appRouter;

require.config({
  baseUrl: "js/",
  paths: {
  	underscore: 'vendor/underscore',
    backbone: 'vendor/backbone',
    localstorage: "vendor/backboneStorage",
    handlebars: 'vendor/handlebars',
    jquery: 'vendor/jquery',
    hammer: "vendor/hammer",
    plugins: 'vendor/plugins',
    routes: "routes/routes",
    animation: "functions/animation",
    actions: "functions/actions",
    index: "view/index",
    note: "view/note",
    ficha: "view/ficha",
    model: "model/model",
    collection: "collection/collection",
    helpers: "functions/helpers"
  },
  shim: {
        'handlebars': {
            exports: 'Handlebars'
        }
  }
  
});

require([ "routes", "collection", "helpers", "localstorage"], function(r, c, helpers) {	
	
	notes = new c.Notes();
	new helpers();
	
	appRouter = new r.AppRouter(); 
	Backbone.history.start();
	
	if (localStorage["notes"]) {		
		var data = $.parseJSON(localStorage["notes"]);		
			jQuery.each(data, function(i, val) {			
			notes.add([{  texto: val.texto, fecha: val.fecha, color: val.color }]);			
		});
	}	
	
				
});