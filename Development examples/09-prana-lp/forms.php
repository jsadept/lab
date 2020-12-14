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

	ini_set('error_reporting', E_ALL);
	ini_set('display_errors', 1);
	ini_set('display_startup_errors', 1);
				if ( 1 ){
				$phone = $_POST['phone'];
				$name = $_POST['name'];
				$productId = $_POST['product'];
				// Параметры для подключения
				$db_host = "localhost"; 
				$db_user = "root"; // Логин БД
				$db_password = ""; // Пароль БД
				$db_base = 'mybase'; // Имя БД
				$db_table = "clients"; // Имя Таблицы БД

				// Подключение к базе данных
				$mysqli = new mysqli($db_host,$db_user,$db_password,$db_base);

				// Если есть ошибка соединения, выводим её и убиваем подключение
				if ($mysqli->connect_error) {
				    echo('Ошибка : ('. $mysqli->connect_errno .') '. $mysqli->connect_error);
				}

 
				$result = $mysqli->query('INSERT INTO ' . $db_table . '(productId, name, number) VALUES (\'' . $productId . '\',\'' . $name . '\',\'' . $phone . '\') ON DUPLICATE KEY UPDATE `number` = \'' . $phone .'\'');
			}	

	?>
	<div class="content">
		<? if($result): ?>
		<h1>Спасибо за заказ</h1>
		<p>Сообщение отправлено.</p> <p>Спасибо, мы скоро свяжемся с Вами.</p>
		<p><a href="index.html">Вернуться на сайт.</a></p>
		<? else: ?>
		<h1>К сожелению ваш заказ не отправлен</h1>
		<p>Повторите попытку.</p> <p>Или свяжитесь с администратором.</p>
		<p><a href="index.html">Вернуться на сайт.</a></p>
		<? endif; ?> 

	</div>


	<!--Переадресация на главную страницу сайта, через 3 секунды-->
<!-- <script language="JavaScript" type="text/javascript">
function changeurl(){eval(self.location="index.html");}
window.setTimeout("changeurl();",3000);
</script>
 -->
</body>
</html>


