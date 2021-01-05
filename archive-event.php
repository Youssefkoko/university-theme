<?php

get_header();
PageBanner(array(
  'title' => 'All Events',
  'subtitle' => 'See Whats going on in our world.'
));
 ?>



<div class="container container--narrow page-section">
<?php
  while(have_posts()) {
    the_post(); 
    get_template_part('template-parts/content-event');
   }
  echo paginate_links();
?>
<hr class="section-break">
  <p>Looking for recap of past event? <a href="<?php echo site_url('/past-event') ?>">Check out our past event archive</a></p>
</div>

<?php get_footer();

?>