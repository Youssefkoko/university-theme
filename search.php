<?php

get_header(); 
pageBanner(array(
  'title' => 'Search What\'s are  looking for!',
  'subtitle' => 'You search for &ldquo;' . esc_html__( get_search_query() ) . '&rdquo;',
));
?>

<div class="container container--narrow page-section">
<?php
if(have_posts()): 
  while(have_posts()) :
    the_post(); 

    get_template_part('template-parts/content', get_post_type());
    ?>
    
  <?php endwhile;
  echo paginate_links();
else:

  echo __('<h2 class="headline headline--small-plus">There is no result Found.</h2>');
  get_search_form();
endif;
?>
</div>

<?php get_footer();

?>