<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package behunter
 */

get_header();
?>

	<!-- main content -->
	<main class="main" id="mainContent">

		<!-- main header -->
		<div class="main-header">

			<!-- main header leftside -->
			<div class="main-header__item">
				<button id="menu-btn">
					<svg class="main__hr-icon" id="menu-btn-svg" >
						<use id="menu-btn-use" xlink:href="<?php echo get_stylesheet_directory_uri()?>/images/sprite.svg#grid" />
					</svg>
				</button>
			</div>
			<div class="main-header__item">
				<a href="/" class="duck-svg__link">
					<svg class="main__hr-icon" id="menu-duck-svg" >
						<use id="menu-btn-use" xlink:href="<?php echo get_stylesheet_directory_uri()?>/images/sprite.svg#duck" />
					</svg>
				</a>
			</div>
			<!-- main header right -->
			<!-- <div class="main-header__item">
				<div class="search">
					<form class="search__form">
						<input class="search__input" type="search" placeholder="Search">
					</form>
				</div>		
			</div> -->
		</div>


		<section class="main__section one-article">
				<?php
					while ( have_posts() ) :
						the_post();

							$category = get_the_category( $post->ID );
							?>

			<article class="article one-article__content">
				<div class="article__main-image article-thumb" title="<?php the_title_attribute(); ?>" style="background-color: grey;background-image: url(<?php the_post_thumbnail_url('full'); ?>)">

					<div class="article-thumb__content">


								<?php $tags = wp_get_post_tags( $post->ID );
								$html = '<div class="section-article__tags article-thumb__item">';

								foreach ( $tags as $tag ) {
									$tag_link = get_tag_link( $tag->term_id );

									$html .= "<a href='{$tag_link}' title='{$tag->name} Tag' class='section-article__tag'>";
									$html .= "{$tag->name}</a>";
								}

								$html .= '</div>';

								echo $html; ?>
					</div>

				</div>


				<div class="article__content">
					<h1 class="h1 article__title"><? the_title();?></h1>
					<div class="article-text"><? the_content(); ?></div>

				</div>

			</article>



						<?		

					endwhile;
						?>	

						<?
						$related_tax = 'category';
						$cats_tags_or_taxes = wp_get_object_terms( $post->ID, $related_tax, array( 'fields' => 'ids' ) );
						$args = array(
							'posts_per_page' => 4, // сколько похожих постов нужно вывести,
							'tax_query' => array(
								array(
									'taxonomy' => $related_tax,
									'field' => 'id',
									'include_children' => true, // нужно ли включать посты дочерних рубрик
									'terms' => $cats_tags_or_taxes,
									'operator' => 'IN' // если пост принадлежит хотя бы одной рубрике текущего поста, он будет отображаться в похожих записях, укажите значение AND и тогда похожие посты будут только те, которые принадлежат каждой рубрике текущего поста
								)
							)
						);
						$pp_query = new WP_Query( $args );
						if( $pp_query->have_posts() ) :?>

						<aside class="article-aside one-article__aside">
						 <?php
							// запускаем цикл
							while( $pp_query->have_posts() ) : $pp_query->the_post();?>


							<article class="article article-aside__content">
								<a href="<?php the_permalink(); ?>" title="<?php the_title();?>" class="article__link">
									<div class="article__main-image article-thumb" style="background-color:grey;background-image: url(<?php the_post_thumbnail_url(); ?>)">
										<div class="article-thumb__content">
											<h2 class="article-thumb__title"><?php the_title();?></h2>
										</div>

									</div>
								</a>
							</article>

								<?php
							endwhile;
						endif;
						?>
						</aside>
						<?php
						 
						// не забудьте про эту функцию, её отсутствие может повлиять на другие циклы на странице
						wp_reset_postdata();
						?>
						<!-- <div class="widget-block-recent-post">
							<div class="widget-block-recent-post__img">
							 	<a href="#" class="widget-block-recent-post__img-link" title="img" >
									<div class="img-overlay"></div>
							   		<img src="img/preview.jpg" alt="">
							   	</a>
							</div>
							<div class="widget-block-recent-post__content">
								<div class="widget-block-recent-post-title">
									<a href="#">
										<h3>Lorem ipsum dolor sit amet, consectetur!</h3>
									</a>
								</div>
								<div class="widget-block-recent-post-info">
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis non nisi, ut labore inventore voluptates iusto quod, rem rerum excepturi </p>
								</div>
							</div>
						</div> -->

					</div>
				</div>
			</div>
		</div>


		

		</main><!-- #main -->
	</div><!-- #primary -->
</div><!-- #content -->

<?php
get_footer();
