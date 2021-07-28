<?php 


		$data = json_decode(file_get_contents('php://input'), true);

		$to = bield.bye@gmail.com;

		$name = $data["user_name"];
		$email = $data["user_email"];
		$city = $data["select_city"];
		$ckeckbox1 = $data["checkbox_name1"] || 'Выключено';
		$ckeckbox2 = $data["checkbox_name2"] ||'Выключено';

		$subject = Форма отправки сообщений с сайта;
		$message = 'Имя: ' . $name .  '; E-mail: ' . $email . '; Город: ' . $city . '; Ckeckbox1: ' . $ckeckbox1 .'; Ckeckbox2: ' . $ckeckbox2;

		$headers = С сайта;

		mail($to,$subject,$message,$headers);
?>