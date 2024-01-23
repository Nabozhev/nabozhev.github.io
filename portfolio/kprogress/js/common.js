// $('body').hide()

window.onload = function () {
	// Ваш скрипт
	var myCarousel = document.querySelector('#carouselExampleIndicators')
	var carousel = new bootstrap.Carousel(myCarousel)


	// Фикс шапка сайта скрипт

	$(window).scroll(function () {
		var top = $(document).scrollTop();
		if (top < 600) $(".sticky_panel").removeClass('sticky_panel__active');
		else $(".sticky_panel").addClass('sticky_panel__active');
	});

	$('.slider-owner').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"><i class="bi bi-arrow-left"></i></button>',
		nextArrow: '<button class="slick-next" aria-label="Next" type="button"><i class="bi bi-arrow-right"></i></button>',
		autoplaySpeed: 2000,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: true,
					centerMode: true,
					centerPadding: '20px',
					slidesToShow: 2
				}
			},
			{
				breakpoint: 576,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '20px',
					slidesToShow: 1
				}
			}
		]
  });












};