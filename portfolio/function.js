$(document).ready(function(){
	$('.menu-toggle').click(function(){
		$('.menu').slideToggle();
	});
});

$(document).ready(function() {
	$("body").on("contextmenu", function(e) {
		return false;
	  });
  });