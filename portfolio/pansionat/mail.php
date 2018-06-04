<?php

$recepient = "0030309@mail.ru";
$sitename = "Пансионат 'Добрые руки'";


 

$name = trim($_GET["name"]);
$phone = trim($_GET["phone"]);
$age = trim($_GET["age"]);
$gender = trim($_GET["gender"]);
$recumbent = trim($_GET["recumbent"]);
$help = trim($_GET["help"]);

 

$pagetitle = "Новая заявка с сайта \"$sitename\"";
$message = "С калькулятора: \nИмя: $name \nТелефон: $phone \nВозраст: $age \nПол: $gender \nПомощь: $help \nСостояние: $recumbent";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");