define("index", ["underscore", "backbone", "handlebars", "animation", "actions", "collection"], function(_, Backbone, Handlebars, a, action, c) {

	/*** VISTA MAIN ***/
	ViewIndex = Backbone.View.extend({
		el: $('.body'),
		initialize: function() {
			this.render();
		},
		events: {
			"click .colores span": "clickColores",
			"click .buttonOK": "sendNota"
		},
		render: function() {
			var datos = { }
			var source   = $("#home").html();
			var template = Handlebars.compile(source);
			var html = template(datos);
			this.$el.html(html);
			
			a.AnimationIn(".home", "slideHorizontal");
			action.IndexEvents();
						
		},
		close: function() {
			this.undelegateEvents();
		},
		sendNota: function() {			
			
			var texto = $('#notaRapida').val();
			var color = $(".colores span.active").attr("title");	
			
			if (texto) {	
				notes.add([{  texto: texto, 
							  fecha: new Date(),
							  color: color
							 }]);
							 						 
				localStorage.setItem("notes", JSON.stringify(notes.toJSON()));
				
			}

			 $('#notaRapida').val("");
			 $('#notaRapida').trigger("blur");
			
		},
		clickColores: function(e) {
			
			var $this = $(e.currentTarget);
			e.stopPropagation();
			
			$(".colores span").removeClass("active");
			$this.addClass("active");
		}
	});


	return ViewIndex;


});