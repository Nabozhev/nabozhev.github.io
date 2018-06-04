jQuery(function ($) {


		$(".fancybox").fancybox();
 
 $('.spis_zabol_right li, .spis_zabol li').hover(
       function(){ $(this).addClass('tablet') },
       function(){ $(this).removeClass('tablet') }
);




            $("span.zayavka").click(function() {

                $("#block_id").slideToggle("slow");
                $("span.zayavka").remove();

             

            });








 


 
// текущая дата
var date = new Date();

// час в текущей временной зоне
var hr = date.getUTCHours()+5;


if (hr==8 && hr<9) {$('.block_time .v8').addClass('active') };
if (hr==9 && hr<10) {$('.block_time .v9').addClass('active') };
if (hr>=10 && hr<12) {$('.block_time .v10').addClass('active') }
if (hr>=12 && hr<14) {$('.block_time .v12').addClass('active') }
if (hr>=14 && hr<16) {$('.block_time .v14').addClass('active') }
if (hr>=16 && hr<18) {$('.block_time .v16').addClass('active') }
if (hr>=18 && hr<20) {$('.block_time .v18').addClass('active') }
if (hr==19 && hr<20) {$('.block_time .v19').addClass('active') }
if (hr>=20 && hr<22) {$('.block_time .v20').addClass('active') }
if (hr==22 && hr<23) {$('.block_time .v22').addClass('active') }

 

 
//ползунок
var age =  $('.polzyn input').val();
 
 	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$(".raschet").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $(".raschet").serialize()
		}).done(function() {
			 
			setTimeout(function() {
					 
					$(".raschet h4").html('<h4>Заявка успешно <br> отправлена!</h4>');

				

			}, 1000);
		});
		return false;
	});


		//Мелкие формы
	$(".first_form form").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail_2.php",
			data: $(".first_form form").serialize()
		}).done(function() {
			 
			setTimeout(function() {
					 
					$(".first_form h4").html('<h4>Отправлено!</h4>');

				

			}, 1000);
		});
		return false;
	});


















$(document).ready(function(){
$('a[href*=#go_to_form]').bind("click", function(e){
var anchor = $(this);
$('html, body').stop().animate({
scrollTop: $(anchor.attr('href')).offset().top
}, 1000);
e.preventDefault();
});
return false;
});


});

