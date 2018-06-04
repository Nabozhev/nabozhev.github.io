$(document).ready(function() {




//Отправка формы

var button = $("#upload > span"), interval;

new AjaxUpload (upload, {

 action: "../ajaxforma/upload.php",
 onSubmit: function (file, ext) {


 	if (ext && /^(rar|zip|doc|txt|jpeg|gzip|png|docx|xlsx|PNG|)$/.test(ext)) {   //допустимые типы файлов

 	button.text ("Загрузка...");
 	this.disable();
 	$('#upload img').show();

 	interval  = window.setInterval(function (){
 		var text = button.text ();

 		if (text.lenght < 13) {
 			button.text (text + ".");
 		} else {

 			button.text("Загрузка...");
 		}

 	}, 200);
 }

 else {	$("<li class='error'></li>").appendTo("#upload").text("Допустимый тип файла: текст и изображения");
 	return false; }

 }	, 
 onComplete: function(file, responce) {
 	$("#upload img").hide();
 		button.text("Загрузка завершена");
 		window.clearInterval (interval);
 		this.enable();
 		$("<li></li>").appendTo("#upload").text(file);
 		document.getElementsByName('file')[0].value = file;

 		 

 }


});


//// ---> Этот код накидывает маску в поле формы телефона
jQuery.fn.exists = function() {
   return jQuery(this).length;
}

//	Phone Mask
$(function() {
  
  if($('#user_phone').exists()){
    
    $('#user_phone').each(function(){
      $(this).mask("(+375) 99-999-99-99");
    });
    
  }
  
  if($('.form-resume').exists()){
    
    var form = $('.form-resume'),
      btn = form.find('.btn_submit');
    
    form.find('.rfield').addClass('empty_field');
  
    setInterval(function(){
    
      if($('#user_phone').exists()){
        var pmc = $('#user_phone');
        if ( (pmc.val().indexOf("_") != -1) || pmc.val() == '' ) {
          pmc.addClass('empty_field');
        } else {
            pmc.removeClass('empty_field');
        }
      }
      
      var sizeEmpty = form.find('.empty_field').size();
      
      if(sizeEmpty > 0){
        if(btn.hasClass('disabled')){
          return false
        } else {
          btn.addClass('disabled')
        }
      } else {
        btn.removeClass('disabled')
      }
      
    },200);

    btn.click(function(){
      if($(this).hasClass('disabled')){
        return false
      } else {
        form.submit();
      }
    });
    
  }

});
//конец кода


 
 
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
				$("<li>uhhhhhh</li>").appendTo("#formru").text(file);
			}, 1000);
		});
		return false;
	});







});