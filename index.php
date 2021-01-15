<?php

get_header(); 
pageBanner(array(
  'title' => __('Welcome to our blog!!!', 'school'),
  'subtitle' => __('Keep up with our latest news.', 'school'),
));
?>

<div class="container container--narrow page-section">
<?php
  if(have_posts()):
    while(have_posts()) :
      the_post(); ?>
      <div class="post-item">
        <h2 class="headline headline--medium headline--post-title"><a href="<?php the_permalink(); ?>"  title="<?php the_title_attribute(); ?>"><?php the_title(); ?></a></h2>
        
        <div class="metabox">
          <p>
          <?php 
          /* Translator: %s: Post Author */
          printf(
            esc_html__('Posted by: %s', 'school'),
            get_the_author_posts_link()
          );
          /* Translator: %s: Post Date */
          printf(
            esc_html__(' On: %s', 'school'),
            '<time datetime="'. esc_attr(get_the_date('c'))  . '">'
            .  esc_html(get_the_date()) . 
            '</time>'
          );
          /* Translator: %s: Post Category */
          printf(
            esc_html__(' in: %s', 'school'),
            get_the_category_list(', ')
          );
          ?> 
          </p>
        </div>
  
        <div class="generic-content">
          <?php the_excerpt(); ?>
          <p>
            <a class="btn btn--blue" href="<?php the_permalink(); ?>"  title="<?php the_title_attribute(); ?>">
            <?php 
            /* Translator: %s: Post Title */
            printf(
              wp_kses( __('Continue reading <span class="screen-reader-text">About</span>  %s', 'school'),
               [
                 'span' => [
                   'class' => []
                 ]
               ] )
              ,
              get_the_title()
             );
            ?>
            &raquo; 
            </a>
          </p>
        </div>
  
      </div>
            <?php endwhile;
    echo paginate_links();
  else:
    get_template_part('template-parts/content', 'none');
  endif; 
?>
</div>

<?php get_footer();

?>