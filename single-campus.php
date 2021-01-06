<?php
  
  get_header();

  while(have_posts()) {
    the_post(); 
    pageBanner();
    ?>
    <div class="container container--narrow page-section">
      <div class="metabox metabox--position-up metabox--with-home-link">
        <p><a class="metabox__blog-home-link" 
        href="<?php echo get_post_type_archive_link('program'); ?>"><i class="fa fa-home" aria-hidden="true"></i> Campuses Home</a> <span class="metabox__main">Posted by <?php the_author_posts_link(); ?> on <?php the_time('n.j.y'); ?> in <?php echo get_the_category_list(', '); ?></span></p>
      </div>

      <div class="generic-content">
        <?php the_content(); ?>
      </div>
      <!-- Professors -->
      <?php 
        
        $relatedPrograms = new WP_Query(array(
          'posts_per_page' => -1,
          'post_type' => 'program',
          'orderby' => 'title',
          'order' => 'ASC',
          'meta_query' => array(
            // Filter by custom field Related Programs 
            array(
              'key' => 'related_campus',
              'compare' => 'LIKE',
              'value' => '"' .  get_the_ID() . '"',
            ),
          )
        ));
        if($relatedPrograms->have_posts()){
          echo '<hr class="section-break">';
          echo '<h2 class="headline headline--medium">Programs Available at this Campus.</h2>';
          echo '<ul class="min-list link-list">';
          while($relatedPrograms->have_posts()){
            $relatedPrograms->the_post(); ?>
            <li>
              <a href="<?php the_permalink(); ?>">
              <?php echo the_title(); ?>
              </a>
            </li>
          <?php
          // end while
          }
        echo '</ul>';
        // end if 
        }
         wp_reset_postdata();
         ?>
    </div>
<?php 
  }

  get_footer();

?>