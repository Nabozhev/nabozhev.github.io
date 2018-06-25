$(function() {

	// Menu toggle

	$('.menu-icon').click(function(e){
		e.preventDefault();
		$(".navigation").toggleClass('nav_show');
		$(this).toggleClass('clicked');
		$(".navigation").slideToggle(300);
	});

 
});
