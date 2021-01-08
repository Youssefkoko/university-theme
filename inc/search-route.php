<?php
add_action('rest_api_init', 'university_register_search');

function university_register_search(){
  register_rest_route('university/v1', 'search', array(
    'method' => WP_REST_SERVER::READABLE,
    'callback' => 'universitySearchResults'
  ));
}

function universitySearchResults(){
  $professors = new WP_Query(array(
    'post_type' => 'professor'
  ));
  $professorsResults = array();
  while($professors->have_posts()){ 
    $professors->the_post();
    array_push($professorsResults, array(
      'title' => get_the_title(),
      'link' => get_the_permalink(),
    ));
  }
  return $professorsResults;
}