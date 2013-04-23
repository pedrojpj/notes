define("ficha", ["underscore", "backbone", "handlebars", "note"], function(_, Backbone, Handlebars, vNote) {	
	
	ViewFicha = Backbone.View.extend({
		id: null,
		el: $('.body'),
		initialize: function() {
			this.render();
		},
		events: {
			"click .btnBack":"gotoBack",
			"keyup textarea#text": "editText",
			"keyup input#titulo": "editTitulo",
			"click input#titulo": "actionTitulo",
			"blur input#titulo" : "actionTitulo",
		},
		render: function() {
			
			var note = notes.at(this.id);
			
			console.log(this.id);
		
			var source   = $("#fichaNota").html();
			var template = Handlebars.compile(source);
			var html = template(note.toJSON());
			this.$el.html(html);
			
		},
		gotoBack: function(e) {			
			appRouter.indexAction();
			new vNote();
		},
		actionTitulo: function(e) {
			
			var $this = $(e.currentTarget);	
			
			if ($this.val() == "Título") {
				$this.val("");
			} 
			else if ($this.val() == "") {
				$this.val("Título");
			}
			
		},
		editText: function(e) {
			
			var $this = $(e.currentTarget);	
			var note = notes.at(this.id);
			note.set({texto: $this.val(), fecha: new Date()});
			
			
		},
		editTitulo: function(e) {
			
			var $this = $(e.currentTarget);	
			var note = notes.at(this.id);
			note.set({titulo: $this.val(), fecha: new Date()});
			
			
		},		
	});
	
	return ViewFicha;
	
});
