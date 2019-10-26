<?php

$to = "gmspbravo@gmail.com";
$subject = "Заявка с сайта [ПОЖАРНАЯ БЕЗОПАСНОСТЬ]";

$siteMail = "noreply.fire-engi.ru";

$name = $_POST["name"];
$email = $_POST["email"];
$message = $_POST["message"];

$message .= "\r\n От: " . $name;

$headers = 'From: ' . $email . "\r\n" .
  'Reply-To: ' . $email . "\r\n" .
  'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);

?>

<p>
  Заявка успешно отправлена!
</p>
<a href="/">Вернуться на сайт</a>