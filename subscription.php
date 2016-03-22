<?php
    $email = htmlspecialchars(trim($_POST['email']));

    $message = "email: $email ";

    $to = '92askar@gmail.com';
    $headers .= "Content-type: text/plain; charset=UTF-8\r\n"; 

    $result = mail($to, "Подписка на - CREATA : $email", $message, $headers);
?>

 