$(function() {
	    $("head").append("<link rel='stylesheet' type='text/css' href='libs/animateCSS/animate.css' />");
    $("head").append("<link rel='stylesheet' type='text/css' href='css/main.css' />");

	//это чтобы работал анимация
(function($) {
	$.fn.animated = function(inEffect) {
		$(this).each(function() {
			var ths = $(this);
			ths.css("opacity", "0").addClass("animated").waypoint(function(dir) {
				if (dir === "down") {
					ths.addClass(inEffect).css("opacity", "1");
				};
			}, {
				offset: "90%"
			});

		});
	};
})(jQuery);

//анимация первой секции
$(".ipad").animated("slideInRight");
$(".select_plan h2").animated("fadeInUp"); 
 
$('.go_to').click( function(){ // ловим клик по ссылке с классом go_to
	var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); // анимируем скроолинг к элементу scroll_el
        }
	    return false; // выключаем стандартное действие
    });

//m-menu-link
//close
$(".m-menu-link").click(function(e) {
  e.preventDefault();
  $(".menu_adaptive").addClass('menu_adaptive_active');

});

$(".close").click(function(e) {
  e.preventDefault();
	$(".menu_adaptive").removeClass('menu_adaptive_active');
	
});



});
