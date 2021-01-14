<?php
if(!is_user_logged_in()): 
  wp_redirect(esc_url(site_url('/')));
  exit();
endif;
  get_header();

  while(have_posts()) {
    the_post(); 
    pageBanner(array(
      // 'title' => 'This title.',
      // 'subtitle' => 'here some dummy text for subtitle.',
      // 'photo' => '',
    ));
    ?>
<div class="container container--narrow page-section">
  <ul class="min-list link-list" id="my-notes">
    <?php 
      $args = array(
        'post_per_page' => -1,
        'post_type' => 'note',
        'author' => get_current_user_id(),
      );
      $userNotes = new WP_Query($args);
      if ($userNotes->have_posts()): 
        while ($userNotes->have_posts()): $userNotes->the_post();
        ?>
    <li>
      <input class="note-title-field" type="text" value="<?php echo esc_attr(get_the_title())?>">
      <span class="edit-note"><i class="fa fa-pencil" aria-hidden="true"></i> Edit</span>
      <span class="delete-note"><i class="fa fa-trash-o" aria-hidden="true"></i> Delete</span>
      <textarea class="note-body-field" name="" id="" cols="30"
        rows="10"><?php echo  esc_attr(wp_strip_all_tags(get_the_content())); ?></textarea>
    </li>
    <?php
        endwhile;
      endif;
     ?>
  </ul>



</div>

<?php }

  get_footer();

?>