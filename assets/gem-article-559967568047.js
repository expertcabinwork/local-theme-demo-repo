
(function( jQuery ){
  // var $module = jQuery('#m-1696365070831').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
    
(function( jQuery ){
  var $module = jQuery('#m-1696365070767').children('.module');
  $module.gfV2HeroBanner({});
  
})( window.GemQuery || jQuery );
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
(function( jQuery ){
  var $module = jQuery('#m-1696365070682').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
    
(function(jQuery) {
  var $module = jQuery('#m-1696365070682-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  var displayType = $module.attr('data-displaytype');
  $module.gfV3ProductImage({
    'effect': effect,
    'displayType': displayType,
    'magnify': magnify
  });
})(window.GemQuery || jQuery);
    
    
(function(jQuery) {
    var $module = jQuery('#m-1696365070682-2').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    
(function( jQuery ){
  var $module = jQuery('#m-1696365070682-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
})( window.GemQuery || jQuery );
    
    
    
    
    
    
    
    
    
    
    
(function( jQuery ){
    var $module = jQuery('#m-1696365070833').children('.module');
    var btnLabel = $module.attr('data-btnlabel');
    
    if ($module.attr('data-modelink') == 'auto'){
        $module.attr('data-editlink', '');
    }
    
    $module.gfSocialShare({
        btnLabel: btnLabel
    });
})( window.GemQuery || jQuery );
    
    
    
    
    
    
    
    