
<?php

/* Здесь проверяется существование переменных */
if (isset($_POST['UMail'])) {$mail = $_POST['UMail'];}
if (isset($_POST['UPhone'])) {$phone = $_POST['UPhone'];}
if (isset($_POST['UName'])) {$name = $_POST['UName'];}
if (isset($_POST['UMap'])) {$map = $_POST['UMap'];}

/* Сюда впишите свою эл. почту */

 $address = "zayavki.franshiza@yandex.ru";
/* А здесь прописывается текст сообщения, \n - перенос строки */
  $mes = "
 <html>
 <head>
 <title>Заявка</title>
 </head>
 <body> 
 <p><strong>Имя:</strong> <span>$name</span></p>
 <p><strong>E-mail:</strong> <span>$mail</span></p>
 <p><strong>Телефон:</strong> <span>$phone</span></p>
  <p><strong>Город:</strong> <span>$map</span></p>
 <p><strong>Отправлено с сайта magic-result.ru</strong></p>
 </body>
 </html>"; 
 

/* А эта функция как раз занимается отправкой письма на указанный вами email */
$sub='Заявка с сайта magic-result.ru'; //сабж
$email='magic-result.ru.<noreply@magic-result.ru>'; // от кого
 $send = mail ($address,$sub,$mes,"Content-type:text/html; charset = utf-8\r\nFrom:$email");
 ?>