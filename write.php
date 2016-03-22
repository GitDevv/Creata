<?php
    $name = htmlspecialchars(trim($_POST['name']));
    $phone = htmlspecialchars(trim($_POST['phone']));
	$email = htmlspecialchars(trim($_POST['email']));

    $message = "Имя: $name  \nНомер: $phone  \nEmail: $email";

    $to = 'my@sferacar.ru';
    $headers .= "Content-type: text/plain; charset=UTF-8\r\n"; 

    $result = mail($to, "Заказ звонка - с CREATA : $phone", $message, $headers);
?>

 
 