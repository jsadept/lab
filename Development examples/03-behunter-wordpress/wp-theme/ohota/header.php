<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Ohota
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://fonts.googleapis.com/css2?family=Bad+Script&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap" rel="stylesheet">
	<link rel="profile" href="https://gmpg.org/xfn/11">
	<!-- Global site tag (gtag.js) - Google Analytics -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=UA-129017484-2"></script>
	<title><?php wp_title("", true); ?></title>
	<script>
	  window.dataLayer = window.dataLayer || [];
	  function gtag(){dataLayer.push(arguments);}
	  gtag('js', new Date());
	  gtag('config', 'UA-129017484-2');
	  gtag('set', {'user_id': 'USER_ID'});
	</script>

	<?php wp_head(); ?>
</head>

<body class="page__body" id="pageBody">
<?php wp_body_open(); ?>
	<header class="header" id="mainHeader">

		<!-- Main logo menu -->
		<div class="header__logo logo">
			<a href="/" class="logo__link">
				<?php echo get_bloginfo('name'); ?><br><span><?php echo get_bloginfo('description', 'display');  ?></span>
			</a>
		</div>

		<!-- Main menu -->
		<nav class="header__menu header-nav">
			<?php wp_nav_menu( array( 'theme_location' => 'header-menu' ) )?>
		</nav>

		<!-- more menu -->
<!-- 		<div class="header__menu header-nav">
			<h2 style="color: white;  border-bottom: 2px solid white; padding-bottom: 20px;">Категории</h2>
			<?php wp_nav_menu( array('theme_location' => 'menu-1') )?>
		</div> -->

		<!-- more menu -->
		<!-- <div class="header__menu header-nav">
			<h2 style="color: white;  border-bottom: 2px solid white; padding-bottom: 20px;">Энциклопедия</h2>
			<?php wp_nav_menu( array('theme_location' => 'menu-2') )?>
		</div> -->
	</header>