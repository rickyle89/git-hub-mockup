
$(function() {
	
	var 
	    $ALL = $(".tabs li a"),
	    //el act as a placeholder to invokes elements in the dom
	    $el;
	
	
	$(".tabs li:first-child a, .content-box:first").addClass("current");
	$("#mytabs").delegate(".tabs a", "click", function() {
		
		$el = $(this);
		
		if ( (!$el.hasClass("current")) ) {
		
			$ALL.removeClass("current");
			$el.addClass("current");


		};

	});

});