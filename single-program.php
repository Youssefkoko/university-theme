<?php
  
  get_header();

  while(have_posts()) {
    the_post(); 
    pageBanner();
    ?>
    <div class="container container--narrow page-section">
      <div class="metabox metabox--position-up metabox--with-home-link">
        <p><a class="metabox__blog-home-link" 
        href="<?php echo get_post_type_archive_link('program'); ?>"><i class="fa fa-home" aria-hidden="true"></i> Programs Home</a> <span class="metabox__main">Posted by <?php the_author_posts_link(); ?> on <?php the_time('n.j.y'); ?> in <?php echo get_the_category_list(', '); ?></span></p>
      </div>

      <div class="generic-content">
        <?php the_content(); ?>
      </div>
      <!-- Professors -->
      <?php 
        
        $relatedProfessors = new WP_Query(array(
          'posts_per_page' => -1,
          'post_type' => 'professor',
          'orderby' => 'title',
          'order' => 'ASC',
          'meta_query' => array(
            // Filter by custom field Related Programs 
            array(
              'key' => 'related_programs',
              'compare' => 'LIKE',
              'value' => '"' .  get_the_ID() . '"',
            ),
          )
        ));
        if($relatedProfessors->have_posts()){
          echo '<hr class="section-break">';
          echo '<h2 class="headline headline--medium">' . get_the_title() . ' Professor</h2>';
          echo '<ul class="professor-cards">';
          while($relatedProfessors->have_posts()){
            $relatedProfessors->the_post(); ?>
            <li class="professor-card__list-item" >
              <a class="professor-card" href="<?php the_permalink(); ?>">
                <img src="<?php the_post_thumbnail_url('professor-landscape'); ?>" class="professor-card__image" alt="">
                <span class="professor-card__name">
                  <?php the_title(); ?>
                </span>
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

      <!-- Up Coming Events -->
      <?php 
        $today = date('Ymd');
        $homepageEvents = new WP_Query(array(
          'posts_per_page' => 2,
          'post_type' => 'event',
          'meta_key' => 'event_date',
          'orderby' => 'meta_value_num',
          'order' => 'ASC',
          'meta_query' => array(
            // filter here by a custom field Event Date
            array(
              'key' => 'event_date',
              'compare' => '>=',
              'value' => $today,
              'type' => 'numeric',
            ),
            // filter here by a custom field Related Program
            array(
              'key' => 'related_programs',
              'compare' => 'LIKE',
              'value' => '"' .  get_the_ID() . '"',
            ),
          )
        ));
        if($homepageEvents->have_posts()){
          echo '<hr class="section-break">';
          echo '<h2 class="headline headline--medium">UpComing ' . get_the_title() . '  Events</h2>';
          while($homepageEvents->have_posts()){
            $homepageEvents->the_post();
            get_template_part('template-parts/content', 'event');
        }
        }
         ?>


    </div>
<?php 
  }

  get_footer();

?>