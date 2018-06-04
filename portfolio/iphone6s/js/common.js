$(document).ready(function() {

 



	$(".sel_1 input").click(function(e) {
  e.preventDefault();
     $(".sel_2").removeClass('active');
   $(".iphones_color .gold").removeClass('current');
  $(".sel_1").addClass('active');
  $(".iphones_color").addClass('hide');
  $(".iphones_color .gray").addClass('current');
  $(".iphones_color .silver").removeClass('current');
   $(".sel_3").removeClass('active');
        $(".sel_4").removeClass('active');
      $(".iphones_color .rose").removeClass('current');
        
       $(".colsel option[value='Gray']").attr("selected", " ");




});


	$(".sel_2 input").click(function(e) {
  e.preventDefault();
   $(".sel_1").removeClass('active');
   $(".iphones_color .gray").removeClass('current');
  $(".sel_2").addClass('active');
  $(".iphones_color").addClass('hide');
  $(".iphones_color .gold").addClass('current');
  $(".iphones_color .silver").removeClass('current');
    $(".sel_3").removeClass('active');
         $(".sel_4").removeClass('active');
      $(".iphones_color .rose").removeClass('current');
        
       $(".colsel option[value='Gold'] ").attr("selected", " ");

});


		$(".sel_3 input").click(function(e) {
  e.preventDefault();
   $(".sel_1").removeClass('active');
   $(".sel_2").removeClass('active');
   $(".iphones_color .gray").removeClass('current');
   $(".iphones_color .gold").removeClass('current');
  $(".sel_3").addClass('active');
  $(".iphones_color").addClass('hide');
  $(".iphones_color .silver").addClass('current');
     $(".sel_4").removeClass('active');
      $(".iphones_color .rose").removeClass('current');
        
       $(".colsel option[value='Silver']").attr("selected", " ");

});


	$(".sel_4 input").click(function(e) {
  e.preventDefault();
   $(".sel_1").removeClass('active');
   $(".sel_2").removeClass('active');
   $(".sel_3").removeClass('active');
   $(".sel_4").addClass('active');
   $(".iphones_color .gray").removeClass('current');
   $(".iphones_color .gold").removeClass('current');
   $(".iphones_color .silver").removeClass('current');
  $(".iphones_color").addClass('hide');
  $(".iphones_color .rose").addClass('current');
   
   $(".colsel option[value='Rose Gold'] ").attr("selected", " ");

});


$(document).ready(function(){
$('a[href*=#form]').bind("click", function(e){
var anchor = $(this);
$('html, body').stop().animate({
scrollTop: $(anchor.attr('href')).offset().top
}, 1000);
e.preventDefault();
});
return false;
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
$(".img_center").animated("zoomIn");
$(".iphones_color").animated("slideInLeft");
$(".selectors").animated("slideInRight");
$(".haracter .info").animated("fadeInUp"); 
$(".haracter .info_right").animated("fadeInUp"); 


//анимация второй секции
$(".schema img").animated("zoomIn");
$(".type_rew ").animated("fadeIn");
$(".type_lst").animated("fadeInUp"); 

//анимация третьей секции
$(".ipleft").animated("rollIn");
$(".ipright").animated("slideInRight");
$(".eden .blok_url").animated("fadeInUp"); 






 
	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("form").submit(function() {
		$.ajax({
			type: "GET",
			url: "iphone.php",
			data: $("form").serialize()
		}).done(function() {
			alert("Спасибо за заказ! Мы скоро свяжемся с Вами.");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});






});