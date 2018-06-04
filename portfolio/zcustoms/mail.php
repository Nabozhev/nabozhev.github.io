<?php

$recepient = "info@zcustoms.ru";
$sitename = "Zcustoms - тюнинг студия";

$name = trim($_GET["name"]);
$email = trim($_GET["email"]);
$messag = trim($_GET["messag"]);

$pagetitle = "Новая заявка с сайта \"$sitename\"";
$message = "Имя: $name \nПочта: $email \nТекст: $messag";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");