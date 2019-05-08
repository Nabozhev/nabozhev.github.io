$(function() {

	// Custom JS
 

	"use strict";

	var toggles = document.querySelectorAll(".c-hamburger");

	for (var i = toggles.length - 1; i >= 0; i--) {
		var toggle = toggles[i];
		toggleHandler(toggle);
	};

	function toggleHandler(toggle) {
		toggle.addEventListener("click", function (e) {
			e.preventDefault();
			(this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
		});
	}


// Перемещение меню на мобильной версии
window.onload = function () {
	  	if (document.documentElement.clientWidth < 1230) {
	  		$('.lang_and__log_in').after($('.main_menu'));
	  		console.log('Логин перед меню...')
	  	} else {
	  		$('.main_menu').after($('.lang_and__log_in'));
	  		console.log('Логин после меню...')
	  	}
};

	  $(window).resize(function () {
	  	if (document.documentElement.clientWidth < 1230) {
	  		$('.lang_and__log_in').after($('.main_menu'));
	  		console.log('Логин перед меню...')
	  	} else {
	  		$('.main_menu').after($('.lang_and__log_in'));
	  		console.log('Логин после меню...')
	  	}
		});
		

// Перемещение кнопки входа на мобильной версии
 

 // Работа меню по клику

 $('.c-hamburger--htx').click(function (e) {
 	e.preventDefault();
 	$(".main_menu").toggleClass('main_menu__open');
 });

});
