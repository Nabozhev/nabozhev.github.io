<?php
$recepient = "cbscompany@mail.ru";
$recepient_2 = "vobraze93@mail.ru";
$siteName = "Grace Fox - территория красоты";
$from = 'noreply@gracefox.ru';
$headers = "From: $from\r\nReply-to:$from\r\nContent-type:text/html;charset=utf-8\r\n";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$id = trim($_POST["info"]);

$title_page = trim($_POST["page-title"]);

$type_form = trim($_POST["form-type"]);

$message = "Поступил заказ на Услугу <b> $id</b>. <br /><br /> Пользователь: $name <br /> \nТелефон: $phone <br />";

$pagetitle = "Новая заявка с сайта  \"$siteName\"";
mail($recepient, $pagetitle, $message, $headers);
mail($recepient_2, $pagetitle, $message, $headers);


?>
