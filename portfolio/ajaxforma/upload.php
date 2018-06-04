<?php
	$uploaddir = '/home/gwbawisf/public_html/subvert-fl.ru/portfolio/ajaxforma/uploads/';

	$uploadfile = $uploaddir . basename($_FILES['userfile']['name']);

	if (move_uploaded_file($_FILES['userfile']['tmp_name'], $uploadfile)) {
		echo "success";
	} else {
		echo "error";
	}