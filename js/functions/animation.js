define("animation", ["jquery", "plugins"], function($, _) {	

	var AnimationIn =  function(content, animation) {
						
		var $this = $(content);	
		var time = 500;
		var width = $(window).width();
		
			switch (animation) {
				case "slideHorizontal":		
					$this.css({ x: width}).transition({ x: '0' }, time, "snap");
				break;
			}
		
	} 
	
	return {
		AnimationIn: AnimationIn
	}

});