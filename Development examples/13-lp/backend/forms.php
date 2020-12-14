<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Спасибо!</title>
	<link href="https://fonts.googleapis.com/css?family=Roboto&amp;subset=cyrillic" rel="stylesheet">
	<style>
		body{
			text-align: center;
			font-family: 'Roboto', sans-serif;
			background-color: #587;
			display: flex;
			justify-content: center;
			align-items: center;
			height: 100vh;
			overflow: hidden;
		}
		.content{-webkit-box-shadow: 5px 2px 40px 2px rgba(0, 0, 0, 0.41);
			box-shadow: 5px 2px 40px 2px rgba(0, 0, 0, 0.41);
			border-radius: 10px;
			background-color: #fff;
			padding: 70px;
			width: 65%;
			font-size: 1.5rem;
			color: #000;
		}
		h1{margin-bottom: 40px}

	</style>
</head>
<body>

	<?php 
			if((isset($_POST['name'])&&$_POST['name']!="")&&(isset($_POST['email'])&&$_POST['email']!="")){

				$to = "info@epicblog.net";; // Администратор 
				$from = $_POST['email']; // Отправитель
				$first_name = $_POST['name'];
				$subject = "Форма отправки сообщений с сайта";
				$message = $first_name . " оставил сообщение:" . "\n\n" . $_POST['text'];
				$headers = "От:" . $from;

				mail($to,$subject,$message,$headers);

			}

	?>
	<div class="content">
		<h1>Спасибо за заказ</h1>
		<p>Сообщение отправлено.</p> <p>Спасибо, мы скоро свяжемся с Вами.</p>
		<p><a href="../index.html">Вернуться на сайт.</a></p>
	</div>


	<!--Переадресация на главную страницу сайта, через 3 секунды-->
<!-- <script language="JavaScript" type="text/javascript">
function changeurl(){eval(self.location="index.html");}
window.setTimeout("changeurl();",3000);
</script>
 -->
</body>
</html>
