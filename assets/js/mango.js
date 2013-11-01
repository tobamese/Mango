$(document).ready(function() {
	
	$('.overlay-open').on('click touchstart', function() {
		$('.overlay').addClass('show');
	  	});
	 $('.overlay-close').on('click touchstart', function() {
	 	$('.overlay').removeClass('show');
	  	});

});
