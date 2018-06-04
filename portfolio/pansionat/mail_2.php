<?php

$recepient = "0030309@mail.ru";
$sitename = "Пансионат 'Добрые руки'";


$name_1 = trim($_GET["name_1"]);
$phone_1 = trim($_GET["phone_1"]);

$name_2 = trim($_GET["name_2"]);
$phone_2 = trim($_GET["phone_2"]);

 

$pagetitle = "Новая заявка с сайта \"$sitename\"";
$message = "С верхней формы: \nИмя: $name_1 \nТелефон: $phone_1 \n С нижней формы: \n Имя: $name_2 \n Телефон: $phone_2";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");