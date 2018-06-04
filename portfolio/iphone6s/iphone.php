<?php

$recepient = "nabozhev@mail.ru";
$sitename = "iPhone 6s";

$name = trim($_GET["name"]);
$phone = trim($_GET["phone"]);
$email = trim($_GET["email"]);
$color = trim($_GET["color"]);
$memorysize = trim($_GET["memorysize"]);

$pagetitle = "Новая заявка с сайта \"$sitename\"";
$message = "Имя: $name \nТелефон: $phone \nemail: $email \nЦвет: $color \nОбъем Памяти: $memorysize";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");