<div class="post-item">
  <h2 class="headline headline--medium headline--post-title"><a href="<?php the_permalink(); ?>" title="<?php the_title_attribute(); ?>"><?php the_title(); ?></a></h2>
  
  <div class="metabox">
    <p>Posted by <?php the_author_posts_link(); ?> 
    on <time datetime="<?php echo  esc_attr(get_the_date('c')); ?>"> <?php echo esc_html(get_the_date()); ?></time> 
    in <?php echo get_the_category_list(', '); ?></p>
  </div>

  <div class="generic-content">
    <?php the_excerpt(); ?>
    <p>
    <a class="btn btn--blue" href="<?php the_permalink(); ?>">
    <?php
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
     ?> &raquo;
    </a></p>
  </div>

</div>


