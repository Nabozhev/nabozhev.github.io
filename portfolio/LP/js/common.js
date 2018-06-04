$(document).ready(function(){

   $(".fancybox").fancybox(
   {
    padding: 0,
    margin: [0, 0, 0, 0]  
  });
   
   
 });
$(document).ready(function(){

   $('.slider_clents').owlCarousel({
    loop: true,
    items: 5,
    autoplay: false,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    dotsSpeed: 600,
    dotsContainer: '',
    nav: false,
    responsive: {
      1200:{
        items: 5,
      },
      992:{
        items: 4,
      },
      768: {
        items: 4,
      },
      600: {
        items: 3,
      },
      480: {
        items: 2,
      },
      460: {
        items: 2,
      },
      320: {
        items: 1,
      }
    }
  });
   
   $('.slider_ofic').owlCarousel({
    loop: true,
    items: 2,
    autoplay: false,
    autoplayTimeout: 0,
    autoplayHoverPause: true,
    dotsSpeed: 500,
    navSpeed:1000,
    dotsContainer: '',
    dots:false,
    nav: true,
    responsive: {
      1200:{
        items: 2,
      },
      992:{
        items: 2,
      },
      768: {
        items: 1,
      },
      700: {
        items: 1,
      },
      600: {
        items: 1,
      },
      480: {
        items: 1,
      },
      320: {
        items: 1,
      },
      300: {
        items: 1,
      }

    }

  });
  

});     
$(document).ready(function(){
  $('form[name="callback-form1"]').submit(function(){
    var UName = $('input[name="name"]').val(),
    UPhone = $('input[name="phone"]').val();
     var UMap= YMaps.location.city;
    var reg1=new RegExp("[^0-9]*","g"),reg2=new RegExp("[^0-9-+ ()]","g");
    if(UName=="")
      {alert('Вы не ввели имя');return false;}
    if(UPhone=="")
      {alert('Вы не ввели номер телефона');return false;}
    if(UPhone.search(reg2)!=-1)
      {alert('Номер телефона может содержать только цифры, символы "+", "-", "(", ")" и пробелы');return false;}
    if(!UPhone||UPhone.length<7){alert("В вашем телефоне слишком мало цифр!");return false;}

    $.ajax({
            url:"sendmail.php", // Куда отсылаем запрос
            data:({ // Что отсылаем
              UName:UName,
              UPhone:UPhone,
              UMap:UMap
            }),
            type:'POST', // Каким методом
            dataType: 'html', // Тип получаемых данных
            success: function(ResultAjax){ // Действие при успешной обработке
              document.location.href = '/info';
            }

            
          });
    return false;
  });
});
$(document).ready(function(){
  $('form[name="callback-form2"]').submit(function(){
    var UName = $('input[name="name2"]').val(),
    UPhone = $('input[name="phone2"]').val(),
    UMail = $('input[name="email2"]').val();
    var UMap= YMaps.location.city;
    var reg1=new RegExp("[^0-9]*","g"),reg2=new RegExp("[^0-9-+ ()]","g");
    if(UName=="")
      {alert('Вы не ввели имя');return false;}
    if(UPhone=="")
      {alert('Вы не ввели номер телефона');return false;}
    if(UPhone.search(reg2)!=-1)
      {alert('Номер телефона может содержать только цифры, символы "+", "-", "(", ")" и пробелы');return false;}
    if(!UPhone||UPhone.length<7){alert("В вашем телефоне слишком мало цифр!");return false;}

    if(UMail=="")
      {alert('Вы не ввели e-mail');return false;}
    
    $.ajax({
            url:"sendmail.php", // Куда отсылаем запрос
             data:({ // Что отсылаем
              UName:UName,
              UPhone:UPhone,
              UMail:UMail,
              UMap:UMap
            }),
            type:'POST', // Каким методом
            dataType: 'html', // Тип получаемых данных
            success: function(ResultAjax){ // Действие при успешной обработке
              document.location.href = '/info';
            }

            
          });
    return false;
  });
});
$(document).ready(function(){
  $('form[name="callback-form3"]').submit(function(){
    var UName = $('input[name="name3"]').val(),
    UPhone = $('input[name="phone3"]').val(),
    UMail = $('input[name="email3"]').val();
    var UMap= YMaps.location.city;
    var reg1=new RegExp("[^0-9]*","g"),reg2=new RegExp("[^0-9-+ ()]","g");
    if(UName=="")
      {alert('Вы не ввели имя');return false;}
    if(UPhone=="")
      {alert('Вы не ввели номер телефона');return false;}
    if(UPhone.search(reg2)!=-1)
      {alert('Номер телефона может содержать только цифры, символы "+", "-", "(", ")" и пробелы');return false;}
    if(!UPhone||UPhone.length<7){alert("В вашем телефоне слишком мало цифр!");return false;}

    if(UMail=="")
      {alert('Вы не ввели e-mail');return false;}
    
    $.ajax({
            url:"sendmail.php", // Куда отсылаем запрос
            data:({ // Что отсылаем
              UName:UName,
              UPhone:UPhone,
              UMail:UMail,
              UMap:UMap
            }),
            type:'POST', // Каким методом
            dataType: 'html', // Тип получаемых данных
            success: function(ResultAjax){ // Действие при успешной обработке
              document.location.href = '/info';
            }

            
          });
    return false;
  });
});