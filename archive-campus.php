<?php

get_header();
PageBanner(array(
  'title' => 'All Campuses',
  'subtitle' => 'We have several convenient Campuses.'
));
 ?>




<div class="container container--narrow page-section">
<ul class="link-list min-list">
  <?php
    while(have_posts()) {
      the_post(); ?>
      <li><a href="<?php the_permalink(); ?>"> <?php the_title(); ?></a></li>
    <?php }
  ?>
</ul>


<?php get_footer();

?>