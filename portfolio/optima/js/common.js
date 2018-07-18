$(function() {

	// Custom JS

	// Включаем вкладки (Эффекты slideLeft/scaleUp/flip)
	$('#tabs').tabulous({
		effect: 'scale'
	});
// Включаем accordion
	$(".set > a").on("click", function(e){
		e.preventDefault();
	if($(this).hasClass('active')){
	$(this).removeClass("active");
	$(this).siblings('.content').slideUp(350);
	$(".set > a svg").removeClass("fa-minus").addClass("fa-plus");
	}else{
	$(".set > a i").removeClass("fa-minus").addClass("fa-plus");
	$(this).find("svg").removeClass("fa-plus").addClass("fa-minus");
	$(".set > a").removeClass("active");
	$(this).addClass("active");
	$('.content').slideUp(350);
	$(this).siblings('.content').slideDown(350);
	}
	});
	// end

	// Запускаем OWL
	$('.owl-carousel').owlCarousel({
    loop:true,
		margin:10,
		mouseDrag: true,
		loop: true,
		smartSpeed: 888,
    nav:true,
    responsive:{
        0:{
            items:2
        },
        768:{
            items:4
        },
        992:{
            items:5
        }
    }
})
	// Закрываем OWL

// Обработка полей формы так же focusin/focusout
$(".main_popap input").focus(function(){
	checkParams();
});

$(".input_phone").mask("+7(999) 999-99-99");//маска поля телефона

$( ".main_popap input" ).keyup(function(){
	checkParams();
});

function checkParams() {
	var name = $('.input_name').val();
	var email = $('.input_email').val();
	var phone = $('.main_popap input').val();
	var chek = $("#cheked");
	
	  // Функция проверки полей формы
	  if(name.length >= 3 && email.length >= 5) {
		$('.submit_form').removeAttr('disabled');
		$('.submit_form').addClass('submit_form_good');
	} else {
		$('.submit_form').attr('disabled', 'disabled')
		$('.submit_form').removeClass('submit_form_good');;
	}
	 
}
// Обработка полей формы

// Отправка письма и вывод уведомления
$(".main_popap").submit(function() {
	$.ajax({
		type: "POST",
		url: "mail.php",
		data: $(this).serialize()
	}).done(function() {
		$('.main_popap input').hide(300);
		setTimeout(function() {
			$('.main_popap').html('Ожидайте звонка.<br>Наш менеджер свяжется с вами в самое ближайшее время');
			jQuery.fancybox.close();
		}, 2400);
	});
	return false;
});
// Конец настроек формы

// Настройки Fotorama - http://fotorama.io/customize/options/
$('.fotorama').fotorama({
	width: '100%',
	// ratio: 16/9,
	allowfullscreen: true,
	nav: 'thumbs',
	thumbborderwidth: 4,
	thumbwidth: 110,
	thumbmargin: 10,
	thumbheight: 65,
	trackpad: true,
	swipe: true,
	thumbmargin: 23.5,
	fit: 'cover',
	thumbfit: 'cover',
	transition: 'slide', //crossfade or  dissolve effects
	loop: true,
  });
// Настройки Fotorama Окончены
// Выделяет первое слово в заголовках для стилизации
$(".five_section h3").each(function () {
	this.innerHTML = this.innerHTML.replace(/^(\S+)/, "<span>$1</span>" );
	 });
	 
	//E-mail Ajax Send from 6th section
	$(".callback").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			// alert("Thank you!");
			$('.success').addClass('success-active');
			setTimeout(function() {
				// Done Functions
				$(".callback").trigger("reset");
			}, 1000);
		});
		return false;
	});

//Включим стилизацию всех выпадающих списков через Selectric
$('select').selectric({
	// maxHeight: 200
});

// Кнопка На верх
$(window).scroll(function(){
if($(this).scrollTop() > $(this).height()) {
	console.log($(this).height());
	console.log($(this).scrollTop());
	$('.top').addClass('active');
} else {
	$('.top').removeClass('active');
}
});
// Клик Кнопка На верх
$('.top').click(function () {
	$('html, body').animate({scrollTop: 0},500);
	return false;
});

// Обработка прелоадера
$(window).on('load', function() {
$('.preloader').delay(600).fadeOut('slow');
});


});
