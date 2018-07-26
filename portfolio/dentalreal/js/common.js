$(function() {

	// Custom JS


	// Кнопка меню
	(function() {
 
		"use strict";
	 
		var toggles = document.querySelectorAll(".c-hamburger");
	 
		for (var i = toggles.length - 1; i >= 0; i--) {
			var toggle = toggles[i];
			toggleHandler(toggle);
		};
	 
		function toggleHandler(toggle) {
			toggle.addEventListener( "click", function(e) {
				e.preventDefault();
				(this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
			});
		}
	 
	})();
	// Кнопка меню


$('.c-hamburger').click(function(e) {
  e.preventDefault();

	
	if ($('ul.d-flex li').css('display') == 'none') 
        { 
            $('ul.d-flex li').animate({height: 'show'}, 500); 
        } 
    else 
        {     
            $('ul.d-flex li').animate({height: 'hide'}, 500); 
        } 

});
 
 

// // фиксим ресайз

// $(window).resize(function() {

// if(document.documentElement.clientWidth > 768) { 
// $('body .navi-panel ul li').css('display', 'flex')
// console.log('####');
// }  
// });



// Меняем местами девушку
$(window).resize(function() {
	if(document.documentElement.clientWidth < 992) { 
	$('.girl_image').after($('.grn_btn'));
	console.log('Ok...')
} else {
	$('header li').after($('.grn_btn'));
	console.log('Return...')
}
	});


// Плавный скрол

$('a[href^="#"]').on('click',function () {
	var target = $($(this).attr("href"));
	if (target.length>0){
			var scroll = target.offset().top;
			$('html,body').animate( { scrollTop: scroll }, 800 );
			return false;
	}
});



// Отправка письма и вывод уведомления
$(".callback").submit(function() {
	$.ajax({
		type: "POST",
		url: "mail.php",
		data: $(this).serialize()
	}).done(function() {
		$('.callback input').hide(300);
		setTimeout(function() {
			$('.callback').html('Ожидайте звонка.<br>Наш менеджер свяжется с вами в самое ближайшее время');
			jQuery.fancybox.close();
		}, 2400);
	});
	return false;
});

// Форма секция

// $('a').click(function() {
//  $('.hd_js_val').val('Професиональная чистка зубов');
//  var log = $('.hd_js_val').val();
// console.log(log);

// });




});
