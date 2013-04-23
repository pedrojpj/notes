define("model", ["underscore", "backbone"], function(_, Backbone) {	
	
	var Note = Backbone.Model.extend({
	    defaults: {
	    	titulo: "",
	        texto: '',
	        fecha: "",
	        color: 1,
	    },
	    initialize: function() { 	    	
	    	this.on('change:titulo', this.ejecutarEvento, this);	
	    	
	    },
	    ejecutarEvento: function() {
	    	alert("hola");
	    }
	    
	});


	return {
		Note: Note
	}

});