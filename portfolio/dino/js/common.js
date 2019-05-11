$(function() {

	// Custom JS
 
		var tab = $('#tabs .tabs-items > div');
		tab.hide().filter(':first').show();

		// Клики по вкладкам.
		$('#tabs .tabs-nav a').click(function () {
			tab.hide();
			tab.filter(this.hash).show();
			$('#tabs .tabs-nav a').removeClass('active');
			$(this).addClass('active');
			return false;
		}).filter(':first').click();

		// Клики по якорным ссылкам.
		$('.tabs-target').click(function () {
			$('#tabs .tabs-nav a[href=' + $(this).data('id') + ']').click();
		});


		//Высота блоков в секции блог

		//  var mh = 0;
		//  $(".blog__item .blog__item__left img").each(function () {
		//  	var h_block = parseInt($(this).height());
		//  	if (h_block > mh) {
		//  		mh = h_block;
		//  	};
		//  });
		//  $(".blog__item__right").height(mh);
 
// Обработка письма заявки

$(".keep_form").submit(function () {
	$.ajax({
		type: "POST",
		url: "/mail.php",
		data: $(this).serialize()
	}).done(function () {
		$('.keep_form input').hide(300);
		setTimeout(function () {
			$('.keep_form').html('Ожидайте звонка.<br>Наш менеджер свяжется с вами в самое ближайшее время');
			jQuery.fancybox.close();
		}, 2400);
	});
	return false;
});
// Конец настроек формы

(function ($) {
	$.fn.animated = function (inEffect) {
		$(this).each(function () {
			var ths = $(this);
			ths.css("opacity", "0").addClass("animated").waypoint(function (dir) {
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
$(".business img").animated("zoomIn");
$(".advantages_item").animated("slideInRight");
$(".history_text h3").animated("fadeInUp");
$(".history_text p").animated("fadeInUp");
$(".our_works").animated("fadeInUp");


//анимация второй секции
$(".services .services_left h2").animated("slideInLeft");
$(".services .services_left .services_item").animated("slideInLeft");

//анимация третьей секции
$(".recent h2").animated("zoomIn");
$(".recent .recent_title").animated("zoomIn");
$(".statistik_item").animated("slideInUp");
$(".pricing_card").animated("rubberBand");


});
