$(document).ready(function() {


	 $('.owl-carousel .fancybox').hover(
       function(){ $(this).addClass('zooming') },
       function(){ $(this).removeClass('zooming') }
);


		//Каруселька
 
 
 
  $("#owl-example").owlCarousel({

  	items : 4,
  	itemsDesktop : [992,3],
    itemsDesktopSmall : [661,2],
    itemsTablet: [410,2],
    itemsTabletSmall: false,
    itemsMobile : [409,1],
  });


    $("#owl-jobs").owlCarousel({

  	items : 1,
  	itemsDesktop : [992,1],
    itemsDesktopSmall : [661,1],
    itemsTablet: [410,1],
    itemsTabletSmall: false,
    itemsMobile : [409,1],
    autoPlay: true,
    navigation: true,
    navigationText: '',
    pagination: false,
  });

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

//конец настройки

//анимация первой секции
$(".number").animated("bounceIn");
 


//анимация второй секции
$(".newbody img").animated("zoomIn");
$(".call_me").animated("slideInRight");
$(".text_zapis p").animated("fadeInUp"); 

//анимация третьей секции
$(".eden img").animated("zoomIn");
$(".eden p").animated("slideInRight");
$(".text_zapis h3").animated("fadeInUp"); 

 

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();

	//Навигация по Landing Page
	//$(".top_mnu") - это верхняя панель со ссылками.
	//Ссылки вида <a href="#contacts">Контакты</a>
	$(".top_mnu").navigation();

	//Добавляет классы дочерним блокам .block для анимации
	//Документация: http://imakewebthings.com/jquery-waypoints/
	$(".block").waypoint(function(direction) {
		if (direction === "down") {
			$(".class").addClass("active");
		} else if (direction === "up") {
			$(".class").removeClass("deactive");
		};
	}, {offset: 100});

	//Плавный скролл до блока .div по клику на .scroll
	//Документация: https://github.com/flesler/jquery.scrollTo
	$("a.scroll").click(function() {
		$.scrollTo($(".div"), 800, {
			offset: -90
		});
	});


 

	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$("#top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});
	
	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("form").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $("form").serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});


	

});