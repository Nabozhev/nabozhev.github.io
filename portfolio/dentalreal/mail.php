<?php

$recepient = "sample@gmail.com";
$siteName = "DENTAL REAL";
$from = 'noreply@100DENTALREAL';
$headers = "From: $from\r\nReply-to:$from\r\nContent-type:text/html;charset=utf-8\r\n";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$title_product = trim($_POST["section"]);
$message = "Поступил  запрос  на  Заказ консультации. <br /> Пользователь: $name <br /> \nТелефон: $phone <br /> \nПросматриваемая секция: $title_product";

$pagetitle = "Заказ товара на сайте \"$siteName\"";
mail($recepient, $pagetitle, $message, $headers);

?>
