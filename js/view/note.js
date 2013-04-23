define("note", ["underscore", "backbone", "handlebars", "hammer"], function(_, Backbone, Handlebars, Hammer) {
	
	
	
	ViewNote = Backbone.View.extend({
		el: $('.notesHome'),
		initialize: function() {
			this.render();
		},
		events: {
			"click div.note": "noteAction"
		},
		render: function() {
			
			notes.setSortField("fecha", "DESC");
			notes.sort();
		
			var source   = $("#templateNote").html();
			var template = Handlebars.compile(source);
			var html = template(notes.toJSON());
			$('.notesHome ul').html(html);
			$('.notesHome li').on("click", this.noteAction);
			
			var hammertime = $('.notesHome li').hammer();			
			hammertime.on("hold", function(e) {
				
				e.stopPropagation();
				var $this = $(e.currentTarget);
				
				$this.find(".note").addClass("selected");
				$this.find(".note").append("<span class='select'></span>");
				
				$this.unbind("click");
				return false;
				
			});
			
		},
		noteAction: function(e) {
			
			var $this = $(e.currentTarget);			
			var index = $this.index();
			
			e.stopPropagation();
			
			$('.notesHome ul').addClass("overflow")
			$this.css({"z-index":10, "position":"relative"});
			$this.transition({scale: 6}, function() {
				appRouter.noteAction(index);				
			});
			
		},
		deleteAction: function(e) {
			alert("pasa");
		}
	});
	
	return ViewNote;
	
});
