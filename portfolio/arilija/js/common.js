$(function() {

	// Custom JS

$('.main_nav li>a:first').hover(function (e) {
	e.preventDefault();
	$(".animtion_element").toggleClass('slide_1');
});


$('.main_nav li:nth-child(2) a').hover(function (e) {
	e.preventDefault();
	$(".animtion_element").toggleClass('slide_2');
});

$('.main_nav li:nth-child(3) a').hover(function (e) {
	e.preventDefault();
	$(".animtion_element").toggleClass('slide_3');
});

$('.main_nav li:nth-child(4) a').hover(function (e) {
	e.preventDefault();
	$(".animtion_element").toggleClass('slide_4');
});

});
