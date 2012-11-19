(function($){
	$.fn.trunKit = function(options) {
		
		var defaults = {
			hoverClass:"trunKit",
			durationFadeIn:200,
			durationFadeOut:200
		};
		var options = $.extend(defaults, options);

		return this.each(function() {
			var obj = $(this);
			var title = obj.html();
			var newtitle = title;
			var shortened = false;
			
			var maxHeight = obj.height();
			obj.css("height","auto"); //undo the height
			
			
			while(obj.height() > maxHeight ){
				newtitle = removeFinalWord(newtitle);
				obj.html(newtitle+"&hellip;");
				shortened = true;
			} 
			
			obj.height(maxHeight);
			
			var hoverClass = options["hoverClass"];
			
			if(shortened){
				if(obj.css("position")=='static') obj.css("position","relative");
				obj.append("<div class='"+hoverClass+"'>"+title+"</div>");
				obj.find("."+hoverClass).hide();
				obj.hover(
					function(){obj.find("."+hoverClass).fadeIn(options.durationFadeIn);},
					function(){obj.find("."+hoverClass).fadeOut(options.durationFadeOut);}
				);
			}	
		});
	
		
	
	};
	var removeFinalWord = function(orig){
		if(orig == '') return '';
		var lastspace = orig.lastIndexOf(" ");
		if(lastspace == -1){
			return orig.substring(0, orig.length - 1);
		} else {
			return orig.substring(0,lastspace);
		}
	}	
})(jQuery);