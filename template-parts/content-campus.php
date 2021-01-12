<div class="post-item">
  <h2 class="headline headline--medium headline--post-title"><a href="<?php the_permalink(); ?>" title="<?php the_title_attribute(); ?>"><?php the_title(); ?></a></h2>
  <div class="generic-content">
    <?php the_excerpt(); ?>
    <p>
      <a class="btn btn--blue" href="<?php the_permalink(); ?>">
      <?php 
      /* translators: %s : Campus Title */
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