<?php 
	if((isset($_POST['name'])&&$_POST['name']!="")&&(isset($_POST['phone'])&&$_POST['phone']!="")){

		$to = "bield.bye@gmail.com";; // Администратор 
		$name = $_POST['name'];
		$phone = $_POST['phone'];
		$subject = "Форма отправки сообщений с сайта";
		$message = $name . " оставил номер:" . "\n\n" . $phone;
		$headers = "С сайта";

		mail($to,$subject,$message,$headers);

	}

?>