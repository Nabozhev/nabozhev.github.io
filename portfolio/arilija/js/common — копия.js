$(function() {

// обработка нажатия ссылок этапов в мобильной версии
$(document).ready(function () {
	if (document.documentElement.clientWidth < 992) {

 $('.step_1').click(function (e) {
 	e.preventDefault();

 	$('.etap_1').removeClass('dn');
 	$('.etap_1').addClass('db');

 

 	$('.main').addClass('dn2');

 	$('.tehnology').addClass('dn2');
 	$('.tehnology').removeClass('db');

 	$('.price').addClass('dn2');
 	$('.price').removeClass('db');

 	$('.gallery_section').addClass('dn2');
 	$('.gallery_section').removeClass('db');

 	$('.contacts').addClass('dn2');
 	$('.contacts').removeClass('db');

	 $('.back').click(function (e) {
	 	e.preventDefault();
		 $('.logolink').trigger('click');
		 console.log('Кликл');
	 });


 });



	} 
});



















$('.gallery').slick({
	centerMode: true,
	centerPadding: '60px',
	slidesToShow: 3,
	variableWidth: true,
	responsive: [{
			breakpoint: 768,
			settings: {
				arrows: true,
				centerMode: true,
				centerPadding: '40px',
				slidesToShow: 3,
				// slidesToScroll: 1
			}
		},
		{
			breakpoint: 480,
			settings: {
				arrows: true,
				centerMode: true,
				centerPadding: '40px',
				slidesToShow: 1
			}
		}
	]
});


$('.img_box').slick({
	centerMode: true,
	centerPadding: '0px',
	slidesToShow: 2,
	variableWidth: true,
	responsive: [{
			breakpoint: 768,
			settings: {
				arrows: true,
				centerMode: true,
				centerPadding: '40px',
				slidesToShow: 2,
				// slidesToScroll: 1
			}
		},
		{
			breakpoint: 680,
			settings: {
				arrows: true,
				centerMode: true,
				centerPadding: '40px',
				slidesToShow: 1
			}
		}
	]
});



$('.popup-link').magnificPopup({
	type: 'image',
	fixedContentPos: false,
	fixedBgPos: true,
	gallery: {
		enabled: false
	},
	
	// other options
});

 

z=50;

$(window).on('wheel', function (event) {

	// deltaY obviously records vertical scroll, deltaX and deltaZ exist too
	if (event.originalEvent.deltaY < 0) {

		z--;
		// wheeled up
		if(z==40) {
			console.log(z);
			$('.main_nav li:nth-child(1) a').trigger('click');
		}
		
		if(z==30) {
				console.log(z);
				$('.main_nav li:nth-child(2) a').trigger('click');
		}


		  if(z==20) {
				console.log(z);
				$('.main_nav li:nth-child(3) a').trigger('click');
		}


		if (z == 10) {
			console.log(z);
			$('.main_nav li:nth-child(4) a').trigger('click');
		}

		if(z<=0) {
			z=10;
		}

		
	} else {
			z++;
				console.log(z);
		// wheeled down

		if (z == 40) {
			console.log(z);
			$('.main_nav li:nth-child(1) a').trigger('click');
		}

		if (z == 30) {
			console.log(z);
			$('.main_nav li:nth-child(2) a').trigger('click');
		}


		if (z == 20) {
			console.log(z);
			$('.main_nav li:nth-child(3) a').trigger('click');
		}


		if (z == 10) {
			console.log(z);
			$('.main_nav li:nth-child(4) a').trigger('click');
		}
				if (z >= 70) {
					z = 50;
				}
	}
});

 
 


	var indicator = new WheelIndicator({
		callback: function (e) {
		// var zhach =	console.log(e.direction);
 
			
		},
		preventMouse: false
	});


	(function () {

		"use strict";

		var toggles = document.querySelectorAll(".c-hamburger");

		for (var i = toggles.length - 1; i >= 0; i--) {
			var toggle = toggles[i];
			toggleHandler(toggle);
		};

		function toggleHandler(toggle) {
			toggle.addEventListener("click", function (e) {
				e.preventDefault();
				(this.classList.contains("is-active") === true) ? this.classList.remove("is-active"): this.classList.add("is-active");
			});
		}

	})();

// Перемещаем языки

$(window).resize(function () {
	if (document.documentElement.clientWidth < 992) {
		$(".lang_sw").appendTo(".main_nav"); //первое летит во второе
	} else {
		$(".lang_sw").appendTo(".header_wrapper"); //первое летит во второе
	}
});

// То же самое но при загрузке страницы
$(document).ready(function () {
	if (document.documentElement.clientWidth < 992) {
		$(".lang_sw").appendTo(".main_nav"); //первое летит во второе
	} else {
		$(".lang_sw").appendTo(".header_wrapper"); //первое летит во второе
	}
});

// Перемещаем форму

$(window).resize(function () {
	if (document.documentElement.clientWidth < 992) {
		$(".price_right").appendTo(".contacts_wrapper"); //первое летит во второе
	} else {
		$(".price_right").appendTo(".price_wrapper"); //первое летит во второе
	}
});

// То же самое но при загрузке страницы
$(document).ready(function () {
	if (document.documentElement.clientWidth < 992) {
		$(".price_right").appendTo(".contacts_wrapper"); //первое летит во второе
	} else {
		$(".price_right").appendTo(".price_wrapper"); //первое летит во второе
	}
});



	// Анимация первой секции
	window.onload = function (e) {
			e.preventDefault();
			$(".interior").toggleClass('interior_animate');
			$(".rybka").toggleClass('rybka_animate');
			$(".volna").toggleClass('volna_animate');
			$(".volna2").toggleClass('volna2_animate');
			$(".volna3").toggleClass('volna3_animate');
			$(".pyatno").toggleClass('pyatno_animate');
			$(".pyatno2").toggleClass('pyatno2_animate');
			$(".scroll").toggleClass('scroll_animate');

		$('.contacts').addClass('dn');
		$('.gallery_section').addClass('dn');
		// $('.etap_1').addClass('dn');
		$('.etap_2').addClass('dn');
		$('.etap_3').addClass('dn');
		$('.etap_4').addClass('dn');
		$('.etap_5').addClass('dn');
	};



	// Нажати я на меню только в десктоп версии
$(document).ready(function () {
	if (document.documentElement.clientWidth > 992) {
	 // Анимация второй секции
	 $('.main_nav li:nth-child(1) a').click(function (e) {
	 	e.preventDefault();
	 	$('.main_nav li:nth-child(2) a').removeClass('active');
	 	$('.main_nav li:nth-child(3) a').removeClass('active');
	 	$('.main_nav li:nth-child(4) a').removeClass('active');
	 	$(this).addClass('active');
	 	$('.main').addClass('dn');
	 	$('.price').addClass('dn');
	 	$('.tehnology').removeClass('dn');
	 	$('.tehnology').addClass('db');

	 	$('.contacts').addClass('dn');
	 	$('.contacts').removeClass('db');

	 	$('.gallery_section').addClass('dn');
	 	$('.gallery_section').removeClass('db');

	 	$('.etap_1').removeClass('db');
	 	$('.etap_1').addClass('dn');
	 	$('.etap_2').removeClass('db');
	 	$('.etap_2').addClass('dn');
	 	$('.etap_3').removeClass('db');
	 	$('.etap_3').addClass('dn');
	 	$('.etap_4').removeClass('db');
	 	$('.etap_4').addClass('dn');

	 	$('.etap_5').removeClass('db');
	 	$('.etap_5').addClass('dn');

	 	$(".interior_price").removeClass('interior_price_animate');
	 	$(".birds_price").removeClass('birds_price_animate');
	 	$(".cloud_price").removeClass('cloud_price_animate');
	 	$(".cloud2_price").removeClass('cloud2_price_animate');
	 	$(".cloud3_price").removeClass('cloud3_price_animate');

	 	$(".divan_contacts").removeClass('divan_contacts_animate');
	 	$(".pyatno_contacts").removeClass('pyatno_contacts_animate');
	 	$(".cloud_contacts").removeClass('cloud_contacts_animate');
	 	$(".blue_contacts").removeClass('blue_contacts_animate');
	 	$(".green_contacts").removeClass('green_contacts_animate');

	 	setTimeout(function () {
	 		$(".interior_tehnology").addClass('interior_tehnology_animate');
	 		$(".olen_tehnology").addClass('olen_tehnology_animate');
	 		$(".pyatno_tehnology").addClass('pyatno_tehnology_animate');
	 		$(".pyatno2_tehnology").addClass('pyatno2_tehnology_animate');
	 		$(".trava_tehnology").addClass('trava_tehnology_animate');
	 		$(".trava2_tehnology").addClass('trava_tehnology2_animate');
	 		$(".trava3_tehnology").addClass('trava_tehnology3_animate');
	 	}, 300);

	 });


	 // Анимация третьей секции
	 $('.main_nav li:nth-child(2) a').click(function (e) {
	 	e.preventDefault();
	 	$('.main_nav li:nth-child(1) a').removeClass('active');
	 	$('.main_nav li:nth-child(3) a').removeClass('active');
	 	$('.main_nav li:nth-child(4) a').removeClass('active');
	 	$(this).addClass('active');
	 	$('.main').addClass('dn');
	 	$('.tehnology').addClass('dn');
	 	$('.price').addClass('db');
	 	$('.price').removeClass('dn');

	 	$('.etap_1').removeClass('db');
	 	$('.etap_1').addClass('dn');
	 	$('.gallery_section').addClass('dn');
	 	$('.gallery_section').removeClass('db');

	 	$('.contacts').addClass('dn');
	 	$('.contacts').removeClass('db');
	 	$('.etap_2').removeClass('db');
	 	$('.etap_2').addClass('dn');
	 	$('.etap_3').removeClass('db');
	 	$('.etap_3').addClass('dn');

	 	$('.etap_4').removeClass('db');
	 	$('.etap_4').addClass('dn');

	 	$('.etap_5').removeClass('db');
	 	$('.etap_5').addClass('dn');

	 	$(".interior_tehnology").removeClass('interior_tehnology_animate');
	 	$(".olen_tehnology").removeClass('olen_tehnology_animate');
	 	$(".pyatno_tehnology").removeClass('pyatno_tehnology_animate');
	 	$(".pyatno2_tehnology").removeClass('pyatno2_tehnology_animate');
	 	$(".trava_tehnology").removeClass('trava_tehnology_animate');
	 	$(".trava2_tehnology").removeClass('trava_tehnology2_animate');
	 	$(".trava3_tehnology").removeClass('trava_tehnology3_animate');

	 	$(".divan_contacts").removeClass('divan_contacts_animate');
	 	$(".pyatno_contacts").removeClass('pyatno_contacts_animate');
	 	$(".cloud_contacts").removeClass('cloud_contacts_animate');
	 	$(".blue_contacts").removeClass('blue_contacts_animate');
	 	$(".green_contacts").removeClass('green_contacts_animate');

	 	setTimeout(function () {
	 		$(".interior_price").addClass('interior_price_animate');
	 		$(".birds_price").addClass('birds_price_animate');
	 		$(".cloud_price").addClass('cloud_price_animate');
	 		$(".cloud2_price").addClass('cloud2_price_animate');
	 		$(".cloud3_price").addClass('cloud3_price_animate');


	 	}, 300);

	 });

	 // Анимация 4 секции
	 $('.main_nav li:nth-child(3) a').click(function (e) {
	 	e.preventDefault();
	 	$('.main_nav li:nth-child(2) a').removeClass('active');
	 	$('.main_nav li:nth-child(4) a').removeClass('active');
	 	$(this).addClass('active');
	 	$('.main').addClass('dn');
	 	$('.price').addClass('dn');
	 	$('.tehnology').addClass('dn');
	 	$('.tehnology').removeClass('db');
	 	$('.tehnology').addClass('db');
	 	$('.gallery_section').addClass('db');
	 	$('.gallery_section').removeClass('dn');
	 	$('.etap_1').removeClass('db');
	 	$('.etap_1').addClass('dn');
	 	$('.contacts').removeClass('db');
	 	$('.contacts').addClass('dn');
	 	$('.etap_2').removeClass('db');
	 	$('.etap_2').addClass('dn');
	 	$('.etap_3').removeClass('db');
	 	$('.etap_3').addClass('dn');
	 	$('.etap_4').removeClass('db');
	 	$('.etap_4').addClass('dn');

	 	$('.etap_5').removeClass('db');
	 	$('.etap_5').addClass('dn');
	 	$(".interior_price").removeClass('interior_price_animate');
	 	$(".birds_price").removeClass('birds_price_animate');
	 	$(".cloud_price").removeClass('cloud_price_animate');
	 	$(".cloud2_price").removeClass('cloud2_price_animate');
	 	$(".cloud3_price").removeClass('cloud3_price_animate');

	 	$(".divan_contacts").removeClass('divan_contacts_animate');
	 	$(".pyatno_contacts").removeClass('pyatno_contacts_animate');
	 	$(".cloud_contacts").removeClass('cloud_contacts_animate');
	 	$(".blue_contacts").removeClass('blue_contacts_animate');
	 	$(".green_contacts").removeClass('green_contacts_animate');

	 	setTimeout(function () {

	 		$(".interior_tehnology").addClass('interior_tehnology_animate');


	 	}, 300);

	 });


	 // Анимация 5 секции
	 $('.main_nav li:nth-child(4) a').click(function (e) {
	 	e.preventDefault();
	 	$('.main_nav li:nth-child(2) a').removeClass('active');
	 	$('.main_nav li:nth-child(1) a').removeClass('active');
	 	$('.main_nav li:nth-child(3) a').removeClass('active');

	 	$(this).addClass('active');

	 	$('.main').addClass('dn');
	 	$('.price').addClass('dn');
	 	$('.tehnology').addClass('dn');
	 	$('.tehnology').removeClass('db');
	 	$('.gallery_section').removeClass('db');
	 	$('.tehnology').addClass('db');
	 	$('.contacts').removeClass('dn');
	 	$('.contacts').addClass('db');
	 	$('.gallery_section').addClass('dn');
	 	$('.etap_1').removeClass('db');
	 	$('.etap_1').addClass('dn');
	 	$('.etap_2').removeClass('db');
	 	$('.etap_2').addClass('dn');
	 	$('.etap_4').removeClass('db');
	 	$('.etap_4').addClass('dn');

	 	$('.etap_5').removeClass('db');
	 	$('.etap_5').addClass('dn');
	 	$('.etap_3').removeClass('db');
	 	$('.etap_3').addClass('dn');

	 	$(".interior_tehnology").removeClass('interior_tehnology_animate');
	 	$(".olen_tehnology").removeClass('olen_tehnology_animate');
	 	$(".pyatno_tehnology").removeClass('pyatno_tehnology_animate');
	 	$(".pyatno2_tehnology").removeClass('pyatno2_tehnology_animate');
	 	$(".trava_tehnology").removeClass('trava_tehnology_animate');
	 	$(".trava2_tehnology").removeClass('trava_tehnology2_animate');
	 	$(".trava3_tehnology").removeClass('trava_tehnology3_animate');


	 	$(".interior_price").removeClass('interior_price_animate');
	 	$(".birds_price").removeClass('birds_price_animate');
	 	$(".cloud_price").removeClass('cloud_price_animate');
	 	$(".cloud2_price").removeClass('cloud2_price_animate');
	 	$(".cloud3_price").removeClass('cloud3_price_animate');
	 	setTimeout(function () {

	 		$(".divan_contacts").addClass('divan_contacts_animate');
	 		$(".pyatno_contacts").addClass('pyatno_contacts_animate');
	 		$(".cloud_contacts").addClass('cloud_contacts_animate');
	 		$(".blue_contacts").addClass('blue_contacts_animate');
	 		$(".green_contacts").addClass('green_contacts_animate');


	 	}, 300);

	 });
	}  
});










$('.c-hamburger--htx').click(function (e) {
	e.preventDefault();
	$(".main_nav").toggleClass('main_nav_active');
	$(".main_header").toggleClass('main_header_nav_active');
});


// Обработка ссылок этапа 1
$('.step_1 off').click(function (e) {
	e.preventDefault();

	$('.etap_1').removeClass('dn');
	$('.etap_1').addClass('db');

		$('.etap_2').removeClass('db');
		$('.etap_2').addClass('dn');
		$('.etap_3').removeClass('db');
		$('.etap_3').addClass('dn');

		$('.etap_4').removeClass('db');
		$('.etap_4').addClass('dn');

		$('.etap_5').removeClass('db');
		$('.etap_5').addClass('dn');

	$('.main').addClass('dn');

	$('.tehnology').addClass('dn');
	$('.tehnology').removeClass('db');

	$('.price').addClass('dn');
	$('.price').removeClass('db');

	$('.gallery_section').addClass('dn');
	$('.gallery_section').removeClass('db');

	$('.contacts').addClass('dn');
	$('.contacts').removeClass('db');


});

// Обработка ссылок этапа 2
$('.step_2').click(function (e) {
	e.preventDefault();

	$('.etap_1').removeClass('db');
	$('.etap_1').addClass('dn');

		$('.etap_3').removeClass('db');
		$('.etap_3').addClass('dn');

		$('.etap_4').removeClass('db');
		$('.etap_4').addClass('dn');
		$('.etap_5').removeClass('db');
		$('.etap_5').addClass('dn');


	$('.etap_2').removeClass('dn');
	$('.etap_2').addClass('db');

	// 
	$('.main').addClass('dn');

	$('.tehnology').addClass('dn');
	$('.tehnology').removeClass('db');

	$('.price').addClass('dn');
	$('.price').removeClass('db');

	$('.gallery_section').addClass('dn');
	$('.gallery_section').removeClass('db');

	$('.contacts').addClass('dn');
	$('.contacts').removeClass('db');


});

// Обработка ссылок этапа 3
$('.step_3').click(function (e) {
	e.preventDefault();

	$('.etap_1').removeClass('db');
	$('.etap_1').addClass('dn');

	$('.etap_2').removeClass('db');
	$('.etap_2').addClass('dn');

	$('.etap_4').removeClass('db');
	$('.etap_4').addClass('dn');

	$('.etap_5').removeClass('db');
	$('.etap_5').addClass('dn');

	$('.etap_3').removeClass('dn');
	$('.etap_3').addClass('db');

	// 
	$('.main').addClass('dn');

	$('.tehnology').addClass('dn');
	$('.tehnology').removeClass('db');

	$('.price').addClass('dn');
	$('.price').removeClass('db');

	$('.gallery_section').addClass('dn');
	$('.gallery_section').removeClass('db');

	$('.contacts').addClass('dn');
	$('.contacts').removeClass('db');


});

// Обработка ссылок этапа 4
$('.step_4').click(function (e) {
	e.preventDefault();

	$('.etap_1').removeClass('db');
	$('.etap_1').addClass('dn');

	$('.etap_2').removeClass('db');
	$('.etap_2').addClass('dn');

	$('.etap_3').removeClass('db');
	$('.etap_3').addClass('dn');

	$('.etap_4').removeClass('dn');
	$('.etap_4').addClass('db');

	// 
	$('.main').addClass('dn');

	$('.tehnology').addClass('dn');
	$('.tehnology').removeClass('db');

	$('.price').addClass('dn');
	$('.price').removeClass('db');

	$('.gallery_section').addClass('dn');
	$('.gallery_section').removeClass('db');

	$('.contacts').addClass('dn');
	$('.contacts').removeClass('db');


});


// Обработка ссылок этапа 5
$('.step_5').click(function (e) {
	e.preventDefault();

	$('.etap_1').removeClass('db');
	$('.etap_1').addClass('dn');

	$('.etap_2').removeClass('db');
	$('.etap_2').addClass('dn');

	$('.etap_3').removeClass('db');
	$('.etap_3').addClass('dn');

	$('.etap_4').removeClass('db');
	$('.etap_4').addClass('dn');

	$('.etap_5').removeClass('dn');
	$('.etap_5').addClass('db');

	// 
	$('.main').addClass('dn');

	$('.tehnology').addClass('dn');
	$('.tehnology').removeClass('db');

	$('.price').addClass('dn');
	$('.price').removeClass('db');

	$('.gallery_section').addClass('dn');
	$('.gallery_section').removeClass('db');

	$('.contacts').addClass('dn');
	$('.contacts').removeClass('db');


});



// Обработка ссылок след этап
$('.etap_1 .next_step').click(function (e) {e.preventDefault();	$('.step_2').trigger('click');});
$('.etap_2 .next_step').click(function (e) {e.preventDefault();	$('.step_3').trigger('click');});
$('.etap_3 .next_step').click(function (e) {e.preventDefault();	$('.step_4').trigger('click');});
$('.etap_4 .next_step').click(function (e) {e.preventDefault();	$('.step_5').trigger('click');});






// $('.back').click(function (e) {
// 	e.preventDefault();
//  	$('.main_nav li:nth-child(1) a').trigger('click');
// });



});
