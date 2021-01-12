<div class="event-summary">
  <a class="event-summary__date t-center" href="#">
    <span class="event-summary__month">
    <time><?php 
      $eventDate = new DateTime(get_field('event_date'));
      echo $eventDate->format('M');
        ?> 
    </time>
    </span>
    <span class="event-summary__day"><time datetime="<?php echo  $eventDate->format('d');  ?>"><?php echo $eventDate->format('d'); ?><time></span>
  </a>
  <div class="event-summary__content">
    <h5 class="event-summary__title headline headline--tiny">
      <a href="<?php the_permalink(); ?>" title="<?php the_title_attribute(); ?>">
        <?php the_title(); ?>
      </a>
    </h5>
    <p> <?php if(has_excerpt()){
            echo get_the_excerpt();
        }else{
        echo wp_trim_words(get_the_content(), 18);
        } 
        printf(
          esc_html__(' On: %s', 'school'),
          '<time datetime="'. esc_attr(get_the_date('c'))  . '">'
          .  esc_html(get_the_date()) . 
          '</time>'
        ); 
        ?> 
      <a href="<?php the_permalink(); ?>" class="nu gray">
      <?php esc_html_e('Learn more'); ?>
      </a>
    </p>
  </div>
</div>