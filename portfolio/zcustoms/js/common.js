$(document).ready(function() {

 $(".top_mnu .frst").click(function() {
        $.scrollTo($("#about"), 800, {
            offset: 90
        })
    });


  $(".top_mnu .scnd").click(function() {
        $.scrollTo($("#uslugi"), 800, {
            offset: 90
        })
    });


   $(".top_mnu .thrd").click(function() {
        $.scrollTo($("#kontakty"), 800, {
            offset: -90
        })
    });



  $("#owl-demo").owlCarousel({
 
      autoPlay: 3000, //Set AutoPlay to 3 seconds
 
      items : 1,
      itemsDesktop : [1199,1],
      itemsDesktop : [768,1],
      itemsTablet : [768,1],
      itemsDesktop : [668,1],
       pagination : true,
    	paginationNumbers: false,
      itemsDesktopSmall : [979,1]

 
  });



//YANDEX MAP
    ymaps.ready(init);
    var myMap;

    function init(){     
        myMap = new ymaps.Map("map", {
            center: [55.68731956906891,37.467463999999985],
            zoom: 17,
            //behaviors: ["disable"]

        });

    helsi = new ymaps.Placemark(myMap.getCenter(), {

        hintContent: 'Россия, г. Москва, ул. Озёрная, 8с2',
        balloonContent: 'Zcustoms - тюнинг студия в Москве'

    }, { // создание метки

 
      iconLayout: 'default#image',
      iconImageHref: 'html/../images/baloon.png', //путь к картинке метки
      iconImageSize: [52, 60],
      iconImageOffset: [-26, -30], //сдвиг относительно левого верхнего угла, задать!
        

      
    });

myMap.geoObjects.add(helsi); //добавление метки в карту

    }

//YANDEX


//АНИМАЦИЯ
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
$("#about h3, #uslugi h3").animated("fadeIn");
$("#about .separ, #uslugi .separ ").animated("fadeIn");
$("#about p.citate, #uslugi p.citate").animated("fadeIn"); 


//анимация второй секции
$(".lump").animated("zoomIn");

$(".textr h4, .textr .title, .textr p, .servdown img").animated("slideInUp");
$(".car img").animated("fadeIn"); 

//анимация третьей секции
$(".flu_eng p, .servdown .serv li").animated("slideInUp");
$(".eden p").animated("slideInRight");
$(".servdown h5").animated("fadeInUp"); 
$(".formown, #map").animated("fadeIn"); 


//АНИМАЦИЯ

 

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();

 

	//Добавляет классы дочерним блокам .block для анимации
	//Документация: http://imakewebthings.com/jquery-waypoints/
	$(".block").waypoint(function(direction) {
		if (direction === "down") {
			$(".class").addClass("active");
		} else if (direction === "up") {
			$(".class").removeClass("deactive");
		};
	}, {offset: 100});




//CODE

 //Кнопка "Наверх"
  //Документация:
  //http://api.jquery.com/scrolltop/
  //http://api.jquery.com/animate/
  $("#scrollup").click(function () {
    $("body, html").animate({
      scrollTop: 0
    }, 800);
    return false;
  });
//CODE
 
 
	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$(".formular").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $(".formular").serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
 
		});
		return false;
	});

});