define("actions", ["jquery", "plugins"], function($, _) {	

	var activate = true;
	var IndexEvents =  function() {
		
		$('#notaRapida').on("focus", function() {			
			var height = $(this).outerHeight();		
			var value = $(this).val();
			
			if (!value) {	
				$(this).transition({"height":height*2});
				$('.form .icons').show();
				
				$('.form .colores').css({x: "30"});
				$('.form .colores').transition({x: "0", "opacity":1});
			}

		});
		
		$('#notaRapida').on("blur", function() {			
			var height = $(this).outerHeight();	
			var value = $(this).val();
			
			if (!value) {		
				$(this).transition({"height":height/2});
				$('.form .icons').hide();
				$('.form .colores').transition({x: "30", "opacity":0});
			}

		});
		
	} 
	
	return {
		IndexEvents: IndexEvents
	}

});