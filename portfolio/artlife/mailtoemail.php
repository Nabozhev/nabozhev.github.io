<?php

$recepient = "nabozhev@mail.ru";
$sitename = "ArtLife";

$name = trim($_GET["name"]);
$email = trim($_GET["email"]);
$text = trim($_GET["text"]);

$pagetitle = "Сообщение с сайта \"$sitename\"";
$message = "Email или телефон: $email \nТекст: $text";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");