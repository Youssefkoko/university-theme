<?php
  
  get_header();

  while(have_posts()) {
    the_post(); 
    pageBanner();
    ?>
    

    <div class="container container--narrow page-section">
        <div class="metabox metabox--position-up metabox--with-home-link">
        <p>
          <a class="metabox__blog-home-link" href="<?php echo site_url('/blog'); ?>">
            <i class="fa fa-home" aria-hidden="true"></i> 
            <?php esc_html_e('Blog Home'); ?>
          </a> 
          <span class="metabox__main">
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
          </span>
        </p>
      </div>

      <div class="generic-content"><?php the_content(); ?></div>

    </div>
  <?php }

  get_footer();

?>