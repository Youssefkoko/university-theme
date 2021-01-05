<?php

get_header();
PageBanner(array(
  'title' => 'All Programs',
  'subtitle' => 'There is something for everyone look around.'
));
 ?>




<div class="container container--narrow page-section">
<ul class="link-list min-list">
  <?php
    while(have_posts()) {
      the_post(); ?>
      <li><a href="<?php the_permalink(); ?>"> <?php the_title(); ?></a></li>
    <?php }
    echo paginate_links();
  ?>
</ul>
<hr class="section-break">
  <p>Looking for recap of past event? <a href="<?php echo site_url('/past-event') ?>">Check out our past event archive</a></p>
</div>

<?php get_footer();

?>