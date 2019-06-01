$(function() {

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
	};

// Анимация второй секции
		$('.main_nav li:nth-child(1) a').click(function (e) {
			e.preventDefault();
			$('.main').addClass('dn');
			$('.tehnology').addClass('db');
			setTimeout(function () {
								$(".interior_tehnology").toggleClass('interior_tehnology_animate');
								$(".olen_tehnology").toggleClass('olen_tehnology_animate');
								$(".pyatno_tehnology").toggleClass('pyatno_tehnology_animate');
								$(".pyatno2_tehnology").toggleClass('pyatno2_tehnology_animate');
								$(".trava_tehnology").toggleClass('trava_tehnology_animate');
								$(".trava2_tehnology").toggleClass('trava_tehnology2_animate');
								$(".trava3_tehnology").toggleClass('trava_tehnology3_animate');
					}, 300);

		});

// Анимация третьей секции
});
