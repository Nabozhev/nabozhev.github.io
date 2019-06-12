$(function() {

	// Custom JS


	// Включение стикед панели

	// Create a new instance of Headhesive
	var options = {
		offset: 500
	}

	// var header = new Headhesive('.sticky_panel', options);

$(window).scroll(function () {
	var top = $(document).scrollTop();
	if (top < 350) $(".sticky_panel").removeClass('sticky_panel__active');
	
	else $(".sticky_panel").addClass(' sticky_panel__active');
});

// 
$(document).ready(function () {
	var top = $(document).scrollTop();
	if (top < 350) $(".sticky_panel").removeClass('sticky_panel__active');
	
	else $(".sticky_panel").addClass(' sticky_panel__active');
});

//Добавление отступа при включении стикед панели

$(window).scroll(function () {

	if (document.documentElement.clientWidth < 577) {
var element_height = $('.sticky_panel').height();
	if ($("div").is(".sticky_panel__active")) {
		$('.main_header').css('padding-top', element_height +'px');
	} else {
		$('.main_header').css('padding-top', "0px");
	}

	}
});


// padding в мобиьной версии


$('.toggle-hamburger').click(function (e) {
	e.preventDefault();
 $('.main_header').toggleClass('pt61');

});


 $('[data-fancybox]').fancybox({
	 // Options will go here
	 autoFocus: false
 });


	// Работа DropDown меню

$('.dropdown__link').click(function (e) {
	e.preventDefault();
	$(".dropdown").toggleClass('dropdown_open');
 $(".sticky_panel").toggleClass('sticky_panel__active_mega_menu');
 $(".mega_menu_wrapper").toggleClass('mega_menu_wrapper_open');

});



// Если скролить с открытой dropdown панелью
$(window).scroll(function () {
if ($("div").is(".sticky_panel__active_mega_menu")) {
	$('.dropdown__link').trigger('click');
}
});



// Включение меню по клику на иконку

$('.toggle-hamburger').click(function (e) {
	e.preventDefault();
	$(".navigation").toggleClass('navigation__open');
	$(".sticky_panel").toggleClass('sticky_panel_white');
	// $(".main_header").toggleClass('main_header_padding');

});

// Для работы анимации икноки- меню
(function () {

	"use strict";

	var toggles = document.querySelectorAll(".toggle-hamburger");

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
// Для меню




// Перемещаем заказать звонок
$(window).resize(function () {
	if (document.documentElement.clientWidth < 992) {
		$(".callback").prependTo(".mainmenu_wrapper"); //первое летит во второе
	} else {
		$(".callback").prependTo(".sticky_right"); //первое летит во второе
	}
});

// То же самое но при загрузке страницы
$(document).ready(function () {
	if (document.documentElement.clientWidth < 992) {
		$(".callback").prependTo(".mainmenu_wrapper"); //первое летит во второе
	} else {
		$(".callback").prependTo(".sticky_right"); //первое летит во второе
	}
});



// Перемещаем номер телефона 
  $(window).resize(function () {
  	if (document.documentElement.clientWidth < 992) {
			$(".phone").prependTo(".mainmenu_wrapper"); //первое летит во второе
  	} else {
  		$(".phone").prependTo(".sticky_right"); //первое летит во второе
  	}
	});
	
// То же самое но при загрузке страницы
	$(document).ready(function () {
  	if (document.documentElement.clientWidth < 992) {
  		$(".phone").prependTo(".mainmenu_wrapper"); //первое летит во второе
  	} else {
  		$(".phone").prependTo(".sticky_right"); //первое летит во второе
  	}
	});




// Перемещаем под крылом охраны

$(window).resize(function () {
	if (document.documentElement.clientWidth < 992) {
		$(".sticky_logo p").prependTo(".mainmenu_wrapper"); //первое летит во второе
	} else {
		$(".mainmenu_wrapper p").appendTo(".sticky_logo"); //первое летит во второе
	}
});

// То же самое но при загрузке страницы
$(document).ready(function () {
	if (document.documentElement.clientWidth < 992) {
		$(".sticky_logo p").prependTo(".mainmenu_wrapper"); //первое летит во второе
	} else {
		$(".mainmenu_wrapper p").appendTo(".sticky_logo"); //первое летит во второе
	}
});



// Меняем фон у картинки при наведении на меню

 $(".mainmenu_right li:first-child").hover(function () { // задаем функцию при наведении курсора на элемент
 $(".main_header").css("background-image", "url('../img/header_bg_1.jpg')"); // задаем цвет заднего фона
 }, function () { // задаем функцию, которая срабатывает, когда указатель выходит из элемента 	
 $(".main_header").css("background-image", "url('../img/header_bg.jpg')"); // задаем цвет заднего фона
 
 });

//  следующий пункт

 $(".mainmenu_right li:nth-child(2)").hover(function () { // задаем функцию при наведении курсора на элемент
 $(".main_header").css("background-image", "url('../img/header_bg_2.jpg')"); // задаем цвет заднего фона
 }, function () { // задаем функцию, которая срабатывает, когда указатель выходит из элемента 	
 $(".main_header").css("background-image", "url('../img/header_bg.jpg')"); // задаем цвет заднего фона
 
 });

//  следующий пункт

 $(".mainmenu_right li:nth-child(3)").hover(function () { // задаем функцию при наведении курсора на элемент
 $(".main_header").css("background-image", "url('../img/header_bg_3.jpg')"); // задаем цвет заднего фона
 }, function () { // задаем функцию, которая срабатывает, когда указатель выходит из элемента 	
 $(".main_header").css("background-image", "url('../img/header_bg.jpg')"); // задаем цвет заднего фона
 
 });

//  следующий пункт


 $(".mainmenu_right li:nth-child(4)").hover(function () { // задаем функцию при наведении курсора на элемент
 $(".main_header").css("background-image", "url('../img/header_bg_4.jpg')"); // задаем цвет заднего фона
 }, function () { // задаем функцию, которая срабатывает, когда указатель выходит из элемента 	
 $(".main_header").css("background-image", "url('../img/header_bg.jpg')"); // задаем цвет заднего фона
 
 });

//  следующий пункт

 $(".mainmenu_right li:nth-child(5)").hover(function () { // задаем функцию при наведении курсора на элемент
 $(".main_header").css("background-image", "url('../img/header_bg_5.jpg')"); // задаем цвет заднего фона
 }, function () { // задаем функцию, которая срабатывает, когда указатель выходит из элемента 	
 $(".main_header").css("background-image", "url('../img/header_bg.jpg')"); // задаем цвет заднего фона
 
 });

//  следующий пункт
 $(".mainmenu_right li:nth-child(6)").hover(function () { // задаем функцию при наведении курсора на элемент
 $(".main_header").css("background-image", "url('../img/header_bg_6.jpg')"); // задаем цвет заднего фона
 }, function () { // задаем функцию, которая срабатывает, когда указатель выходит из элемента 	
 $(".main_header").css("background-image", "url('../img/header_bg.jpg')"); // задаем цвет заднего фона
 
 });

//  следующий пункт
 $(".mainmenu_right li:nth-child(7)").hover(function () { // задаем функцию при наведении курсора на элемент
 $(".main_header").css("background-image", "url('../img/header_bg_7.jpg')"); // задаем цвет заднего фона
 }, function () { // задаем функцию, которая срабатывает, когда указатель выходит из элемента 	
 $(".main_header").css("background-image", "url('../img/header_bg.jpg')"); // задаем цвет заднего фона
 
 });

//  следующий пункт
 $(".mainmenu_right li:nth-child(8)").hover(function () { // задаем функцию при наведении курсора на элемент
 $(".main_header").css("background-image", "url('../img/header_bg_8.jpg')"); // задаем цвет заднего фона
 }, function () { // задаем функцию, которая срабатывает, когда указатель выходит из элемента 	
 $(".main_header").css("background-image", "url('../img/header_bg.jpg')"); // задаем цвет заднего фона
 
 });

//  The End

// Предварительная загрузка изображений
 pic = new Image();
 pic2 = new Image();
 pic3 = new Image();
 pic4 = new Image();
 pic5 = new Image();
 pic6 = new Image();
 pic7 = new Image();
 pic8 = new Image();
 pic.src = "../img/header_bg_1.jpg";
 pic2.src = "../img/header_bg_2.jpg";
 pic3.src = "../img/header_bg_3.jpg";
 pic4.src = "../img/header_bg_4.jpg";
 pic5.src = "../img/header_bg_5.jpg";
 pic6.src = "../img/header_bg_6.jpg";
 pic7.src = "../img/header_bg_7.jpg";
 pic8.src = "../img/header_bg_8.jpg";

// Отправка формы
$(".request_form").submit(function () {
	$.ajax({
		type: "POST",
		url: "/wp-content/themes/s-a-ricci/mail.php",
		data: $(this).serialize()
	}).done(function () {
		$('.main_popap input').hide(300);
		setTimeout(function () {
			$('.main_popap').html('Ожидайте звонка.<br>Наш менеджер свяжется с вами в самое ближайшее время');
			jQuery.fancybox.close();
		}, 2400);
	});
	return false;
});


// Маска

//  $(".phone_input").mask("+7(999) 999-99-99");


  ! function (i) {
  	var o, n;
  	i(".title_block").on("click", function () {
  		o = i(this).parents(".accordion_item"), n = o.find(".info"),
  			o.hasClass("active_block") ? (o.removeClass("active_block"),
  				n.slideUp()) : (o.addClass("active_block"), n.stop(!0, !0).slideDown(),
  				o.siblings(".active_block").removeClass("active_block").children(
  					".info").stop(!0, !0).slideUp())
  	})
	}(jQuery);
	

	// Галерея

	Galleria.configure({
		transition: 'fade',
		imageCrop: true,
		height: 590,
		// width: 1170,
		showInfo: true,
		thumbnails: false
	});





	if ($("div").is(".galleria")) {
	Galleria.run('.galleria');
	}

});
