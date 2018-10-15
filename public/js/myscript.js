window.jQuery = window.$ = jQuery;
jQuery(document).ready(function() {
  
  jQuery('#carousel .slides li').click(function() {
    jQuery('#carousel .slides li').removeClass("flex-active-slide");
    jQuery(this).addClass("flex-active-slide");
  
    var target = jQuery(this).data("target");
    jQuery('#home .flexslider li').removeClass("flex-active-slide");
    jQuery('.'+target).addClass("flex-active-slide");
  });

});



