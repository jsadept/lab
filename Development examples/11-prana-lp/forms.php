<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5GDP7GX');</script>
<!-- End Google Tag Manager -->
	<meta charset="UTF-8">
	<title>Спасибо!</title>
	<link href="https://fonts.googleapis.com/css?family=Roboto&amp;subset=cyrillic" rel="stylesheet">
	<style>
		body{
			text-align: center;
			font-family: 'Roboto', sans-serif;
			background-color: #16a085;
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

		a{    
			font-size: 2rem;
			background-color: #16a085!important;
    		color: #fff!important;
		    border: 1px solid #16a085;
		    display: inline-block;
		    -webkit-transition: color .2s, background-color .2s, border-color .2s;
		    transition: color .2s, background-color .2s, border-color .2s;
			padding: 16px 24px;
			border-radius: 3px;
			text-decoration: none;
		}
		a:hover{
			background-color: #16a555!important;
    		color: #fff!important;
		    border: 1px solid #16a555;

		}
		h1{margin-bottom: 40px}

	</style>
</head>
<body>
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5GDP7GX"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
	<?php 

	ini_set('error_reporting', E_ALL);
	ini_set('display_errors', 1);
	ini_set('display_startup_errors', 1);
				if ( 1 ){
				$phone = $_POST['phone'];
				$name = $_POST['name'];
				// Параметры для подключения
				$db_host = "sql168.main-hosting.eu"; 
				$db_user = "u459175855_admin"; // Логин БД
				$db_password = "4OroFRWnCwQh"; // Пароль БД
				$db_base = 'u459175855_main'; // Имя БД
				$db_table = "clients"; // Имя Таблицы БД

				// Подключение к базе данных
				$mysqli = new mysqli($db_host,$db_user,$db_password,$db_base);

				// Если есть ошибка соединения, выводим её и убиваем подключение
				if ($mysqli->connect_error) {
				    echo('Ошибка : ('. $mysqli->connect_errno .') '. $mysqli->connect_error);
				}

 
				$result = $mysqli->query('INSERT INTO ' . $db_table . '(name, number) VALUES (\'' . $name . '\',\'' . $phone . '\') ON DUPLICATE KEY UPDATE `number` = \'' . $phone .'\'');
			}	

	?>
	<div class="content">
		<? if($result): ?>
		<h1>Спасибо за заказ</h1>
		<p>Сообщение отправлено.</p> <p>Спасибо, мы скоро свяжемся с Вами.</p>
		<p><a href="index.html">Вернуться на сайт.</a></p>
		<? else: ?>
		<h1>Технические неполадки</h1>
		<p>Повторите попытку.</p> <p>Или свяжитесь с администратором.</p>
		<p><a href="index.html">Вернуться на сайт.</a></p>
		<? endif; ?> 

	</div>


	<!--Переадресация на главную страницу сайта, через 13 секунд-->
<script language="JavaScript" type="text/javascript">
function changeurl(){eval(self.location="index.html");}
window.setTimeout("changeurl();",13000);
</script>

</body>
</html>


