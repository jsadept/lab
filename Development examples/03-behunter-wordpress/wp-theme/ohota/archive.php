<?php
/**
 * The template for displaying archive pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Ohota
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
<!-- 			<div class="main-header__item">
				<div class="search">
					<form class="search__form">
						<input class="search__input" type="search" placeholder="Search">
					</form>
				</div>		
			</div> -->
		</div>


		<section class="main__section section">

		<?php
					if ( have_posts() ) :

						if ( is_home() && is_front_page() ) :
							?>
										<!-- main content start hr -->
								<div class="main__hr section__item">
									<div class="main__hr-content">
										<svg class="main__hr-icon">
											<use xlink:href="<?php echo get_stylesheet_directory_uri()?>/images/sprite.svg#print" />
										</svg>
									</div>	
								</div>

								<!-- main content title -->

							<?php
						endif;
						?>

						<h2 class="section-title section__item"><?php wp_title("", true); ?></h2>
						<div class="section-content">
						<?php
						/* Start the Loop */
						while ( have_posts() ) :
							the_post();
							$category = get_the_category( $post->ID );
							?>
						<article class="section-article">
							<a class="section-article__thumb section-article__item" style="background-color: grey;background-image: url('<?php the_post_thumbnail_url( 'post-thumb' );?>')"></a>
							<div class="section-article__content section-article__item">
								<a href="<?php the_permalink(); ?>" class="section-article__link" href=""><h3 class="section-article__title"><?php the_title();?></h3></a>
							

								<?php $tags = wp_get_post_tags( $post->ID );
								$html = '<div class="section-article__tags">';

								foreach ( $tags as $tag ) {
									$tag_link = get_tag_link( $tag->term_id );

									$html .= "<a href='{$tag_link}' title='{$tag->name} Tag' class='section-article__tag'>";
									$html .= "{$tag->name}</a>";
								}

								$html .= '</div>';

								echo $html; ?>
								<div class="section-article__desctiption"><?php the_excerpt_max_charlength(120); ?></div>
							</div>
							<div class="section-article__footer section-article__item">
								<div class="section-article__views"><?php the_author(); ?></div>
								<div class="section-article__date">	<?php $human_time = human_time_diff( get_post_time( 'U', true ) );
									$iso8601_time = get_the_time('c');
									printf( '<span class="entry-date published" datetime="%s">%s назад</span>', $iso8601_time, $human_time ); ?>		
								</div>
							</div>

						</article>
						<?
						endwhile;


					else :

						get_template_part( 'template-parts/content', 'none' );

					endif;
				?>
			</div>
			
		</section>


	</main>

<?php
get_footer();
