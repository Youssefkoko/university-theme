<?php
require_once get_theme_file_path('/inc/search-route.php');

function university_custom_rest(){
  register_rest_field('post', 'authorName', array(
    'get_callback' => function(){return get_the_author();},
  ));
}
add_action('rest_api_init', 'university_custom_rest');

function university_files() {
  wp_enqueue_style('custom-google-fonts', '//fonts.googleapis.com/css?family=Roboto+Condensed:300,300i,400,400i,700,700i|Roboto:100,300,400,400i,700,700i');
  wp_enqueue_style('font-awesome', '//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
  
  if (strstr($_SERVER['SERVER_NAME'], 'http://localhost:3000/')) {
    wp_enqueue_script('main-university-js', 'http://localhost:3000/bundled.js', NULL, '1.0', true);
  } else {
    wp_enqueue_script('our-vendors-js', get_theme_file_uri('/bundled-assets/vendors~scripts.bc40ae15d79260f963aa.js'), NULL, '1.0', true);
    wp_enqueue_script('main-university-js', get_theme_file_uri('/bundled-assets/scripts.103fa4a009d68e59e8d9.js'), NULL, '1.0', true);
    wp_enqueue_style('our-main-styles', get_theme_file_uri('/bundled-assets/styles.103fa4a009d68e59e8d9.css'));
  }
  wp_localize_script('main-university-js', 'themeData', array(
    'root_url' => get_site_url(),
    'nonce' => wp_create_nonce('wp_rest'),
  ));

  
}

add_action('wp_enqueue_scripts', 'university_files');

function university_features() {
  add_theme_support('title-tag');
  add_theme_support('post-thumbnails'); 
  add_image_size( 'professor-landscape', 400, 260, true);
  add_image_size( 'professor-portrait', 480, 650, true);
  add_image_size('pageBanner', 1500, 350, true); 

}

add_action('after_setup_theme', 'university_features');


function university_query_default_query($query){
  // Create custom Query for Campus
  if(!is_admin() AND is_post_type_archive('canpus') AND is_main_query()){
    $query->set('orderby', 'title');
    $query->set('order', 'ASC');
    $query->set('post_per_page', -1);

  }
  // Create Custom Query for Programs
  if(!is_admin() AND is_post_type_archive('program') AND is_main_query()){
    $query->set('orderby', 'title');
    $query->set('order', 'ASC');
    $query->set('post_per_page', -1);

  }
  // Create Custom Query for Event
  if(!is_admin() AND is_post_type_archive('event') AND $query->is_main_query()) {
    $today = date('Ymd');
    $query->set('meta_key', 'event_date');
    $query->set('orderby', 'meta_value_num');
    $query->set('order', 'ASC');
    $query->set('meta_query', array(
      array(
        'key' => 'event_date',
        'compare' => '>=',
        'value' => $today,
        'type' => 'numeric',
      ),
    ));
  }
}
add_action('pre_get_posts', 'university_query_default_query');

function PageBanner($args = NULL) {
  if(!$args['title']){
    $args['title'] = get_the_title();
  }
  if(!$args['subtitle']){
    $args['subtitle'] = get_field('page_banner_subtitle');
  }
  if(!$args['photo']){
    if(get_field('page_banner_background_image') AND !is_archive() AND !is_home() ){

      $args['photo'] = get_field('page_banner_background_image')['sizes']['pageBanner'];
    }else{
      $args['photo'] = get_theme_file_uri('./images/ocean.jpg');
    }
  }
  ?>
<div class="page-banner">
  <div class="page-banner__bg-image" style="background-image: url(<?php echo $args['photo']; ?>);">
  </div>
  <div class="page-banner__content container container--narrow">
    <h1 class="page-banner__title"><?php if($args['title']) echo $args['title']; ?></h1>
    <div class="page-banner__intro">
      <p>
        <?php if($args['subtitle']){
            // echo get_field('page_banner_subtitle'); 
            echo $args['subtitle']; 
          }
            ?>
      </p>
    </div>
  </div>
</div>
<?php 
}


// Redirect users to Home page

function redirect_subs_to_frontEnd() {
  $ourCurrentUser = wp_get_current_user();

  if(count($ourCurrentUser->roles) == 1 && $ourCurrentUser->roles[0] == 'subscriber'){
    wp_redirect(site_url('/'));
    exit;
  }
}

add_action('admin_init', 'redirect_subs_to_frontEnd');

function no_subscriber_admin_bar() {
  $ourCurrentUser = wp_get_current_user();

  if(count($ourCurrentUser->roles) == 1 && $ourCurrentUser->roles[0] == 'subscriber'){
    show_admin_bar(false);
  }
}

add_action('wp_loaded', 'no_subscriber_admin_bar');

// Force Note Post to be Private
function makeNotepRivate($data){
  if($data['post_type'] == 'note'){
    $data['post_content'] = sanitize_textarea_field( $data['post_content'] );
    $data['post_title'] = sanitize_text_field( $data['post_title'] );
  }
  if($data['post_type'] == 'note' AND $data['post_status'] != 'trash'){
  $data['post_status'] = 'private';
  }
  return $data;
}
add_filter('wp_insert_post_data', 'makeNotepRivate');


// Custmoze Login Screen
add_filter('login_headerurl', 'ourHeaderUrl');
function ourHeaderUrl() {
  return esc_url(site_url('/'));
}

add_action('login_enqueue_scripts', 'ourLoginCss');

function ourLoginCss() {
  wp_enqueue_style('our-main-styles', get_theme_file_uri('/bundled-assets/styles.103fa4a009d68e59e8d9.css'));
  wp_enqueue_style('custom-google-fonts', '//fonts.googleapis.com/css?family=Roboto+Condensed:300,300i,400,400i,700,700i|Roboto:100,300,400,400i,700,700i');

}

add_filter('login_headertitle', 'ourLoginTitle');
function ourLoginTitle(){
  return get_bloginfo('name');
}

// filter hook to change no post found in the index file
// add_filter( '_school_no_post_text', 'change_text_no_post', 10, 1 );