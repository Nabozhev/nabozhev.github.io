<?php

$recepient = "nabozhev@mail.ru";
$sitename = "ArtLife";

$name = trim($_GET["message"]);
$phone = trim($_GET["phone"]);

$pagetitle = "Вас просят перезвонить с сайта \"$sitename\"";
$message = "Сообщение: $name \nТелефон: $phone";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");