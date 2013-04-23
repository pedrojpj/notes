define("helpers", ["jquery", "handlebars"], function($, Handlebars) {


	Helpers = function () {
		
		Handlebars.registerHelper("date", function(fecha) {	
			
			var fecha = new Date(fecha);			
			var today = new Date();
			var date = null;
			var month = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
			
			if (today.getDate() == fecha.getDate()) {
				
				var minutes = fecha.getMinutes();
				minutes = minutes.toString();
				
				if (minutes.length == 1) {
					minutes = 0+minutes;
				}
				date = fecha.getHours()+":"+minutes;				
			} else {
				date = fecha.getDate()+" de "+month[fecha.getMonth()]
			}
			
			return date;
			
		});
		
		
	}
	
	return Helpers;
	
});



			