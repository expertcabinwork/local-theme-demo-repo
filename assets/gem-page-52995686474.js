

          jQuery(function() {
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  var $module = jQuery('#m-1600964971024').children('.module');
  if (mode == 'dev') {
      jQuery('#m-1600964971024').attr('data-name', '').css('background-image', 'none').removeAttr('data-image');
      
      var flag = true;
      var $bkLiquid = parent.jQuery('body').find('#gfFrame').contents().find('#module-1600964971024');
      if ($bkLiquid && $bkLiquid.length > 0) {
          var $settings = $bkLiquid.find('.settings');
          try {
              var name = '';
              var imageUrl = '';
              settings = JSON.parse($settings.html());
              for (var i = 0; i < settings.length; i++) {
                  if (settings[i].name == 'name') {
                      name = settings[i].default_value
                  }
                  if (settings[i].name == 'image') {
                      imageUrl = settings[i].default_value
                  }
              }
              if (imageUrl != '') {
                  flag = false;
                  jQuery('#m-1600964971024').css('background-image', 'url(' + imageUrl + ')').css('min-height', '100px').attr('data-image', 'true');
              }
              if (name != '' && name != 'Custom Code') {
                  flag = false;
                  jQuery('#m-1600964971024').attr('data-name', name);
              }
          } catch(error) {
              console.log(error);
          }
      }
      if (flag) {
          jQuery('#m-1600964971024').attr('data-name', 'Right click on the module, then choose Edit Html / Liquid option to start writing your custom code.');
      }
  }
});
      
        jQuery(function() {
            var $hero = jQuery('#m-1601071074169');
            var $module = jQuery('#m-1601071074169').children('.module');

            var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
            if(mode == 'dev') {
                $hero.children('.hero-link').hide();
            }

            var height = jQuery.trim($module.attr('data-height'));
            if(height == undefined || height == '') {
                $hero.attr('style', 'height: auto!important');
                jQuery(window).resize(function(){
                    $hero.attr('style', 'height: auto!important');
                });
            } else {
                $hero.removeAttr('style');
            }

            var effect = $module.attr('data-effect');
            var transition = $module.attr('data-transition');

            if(effect == 'effect-zoom') {   
                $module.parent().addClass(effect);  

                setTimeout(function() {
                    var backgroundImage = $module.parent().css('background-image');
                    var backgroundSize = $module.parent().css('background-size');
                    var backgroundPosition = $module.parent().css('background-position');
                    $module.siblings('.gf_hero-bg-wrap').css({
                        'background-image'      : 'inherit',
                        'background-size'       : 'inherit',
                        'background-position'   : 'inherit',
                        '-webkit-transition'    : 'transform ' + transition + 's ease-in-out',
                        '-moz-transition'       : 'transform ' + transition + 's ease-in-out',
                        '-ms-transition'        : 'transform ' + transition + 's ease-in-out',
                        '-o-transition'         : 'transform ' + transition + 's ease-in-out',
                        'transition'            : 'transform ' + transition + 's ease-in-out'
                    })
                    $module.siblings('.gf_hero-bg-wrap').children('.gf_hero-bg').css({
                        'background-image'      : 'inherit',
                        'background-size'       : 'inherit',
                        'background-position'   : 'inherit',
                        '-webkit-transition'    : 'transform ' + transition + 's ease-in-out',
                        '-moz-transition'       : 'transform ' + transition + 's ease-in-out',
                        '-ms-transition'        : 'transform ' + transition + 's ease-in-out',
                        '-o-transition'         : 'transform ' + transition + 's ease-in-out',
                        'transition'            : 'transform ' + transition + 's ease-in-out'
                    });
                }, 300);
            }

            if($module.attr('data-fixedMode') == '1'){
                $module.parent().attr('style', 'padding-top: 0px!important; padding-bottom: 0px!important; height: auto!important; background-image: none!important;max-width: 100%!important;');

                jQuery(window).resize(function(){
                    var backgroundImage =  $module.parent().css('background-image');
                    $module.parent().attr('style', 'padding-top: 0px!important; padding-bottom: 0px!important; height: auto!important; background-image: none!important;max-width: 100%!important;');
                });
            } else {
                $module.parent().removeAttr('style');
            }
        });
    
          jQuery(function() {
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  var $module = jQuery('#m-1601071074086').children('.module');
  if (mode == 'dev') {
      jQuery('#m-1601071074086').attr('data-name', '').css('background-image', 'none').removeAttr('data-image');
      
      var flag = true;
      var $bkLiquid = parent.jQuery('body').find('#gfFrame').contents().find('#module-1601071074086');
      if ($bkLiquid && $bkLiquid.length > 0) {
          var $settings = $bkLiquid.find('.settings');
          try {
              var name = '';
              var imageUrl = '';
              settings = JSON.parse($settings.html());
              for (var i = 0; i < settings.length; i++) {
                  if (settings[i].name == 'name') {
                      name = settings[i].default_value
                  }
                  if (settings[i].name == 'image') {
                      imageUrl = settings[i].default_value
                  }
              }
              if (imageUrl != '') {
                  flag = false;
                  jQuery('#m-1601071074086').css('background-image', 'url(' + imageUrl + ')').css('min-height', '100px').attr('data-image', 'true');
              }
              if (name != '' && name != 'Custom Code') {
                  flag = false;
                  jQuery('#m-1601071074086').attr('data-name', name);
              }
          } catch(error) {
              console.log(error);
          }
      }
      if (flag) {
          jQuery('#m-1601071074086').attr('data-name', 'Right click on the module, then choose Edit Html / Liquid option to start writing your custom code.');
      }
  }
});
      
      
      
      
          jQuery(function() {
  var $module = jQuery('#m-1602348568340').children('.module');
  $module.gfV3Product();
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1602348568340-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});
      
          jQuery(function() {
  var $module = jQuery('#m-1602348568340-1').children('.module');
});
      
          jQuery(function() {
        var $module = jQuery('#m-1602348568340-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
      
          jQuery(function() {
  var $module = jQuery('#m-1602348568340-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
      
          jQuery(function() {
  var $module = jQuery('#m-1602348615212').children('.module');
  $module.gfV3Product();
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1602348615212-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});
      
          jQuery(function() {
  var $module = jQuery('#m-1602348615212-1').children('.module');
});
      
          jQuery(function() {
        var $module = jQuery('#m-1602348615212-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
      
          jQuery(function() {
  var $module = jQuery('#m-1602348615212-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
      
          jQuery(function() {
  var $module = jQuery('#m-1602348455130').children('.module');
  $module.gfV3Product();
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1602348455130-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});
      
          jQuery(function() {
  var $module = jQuery('#m-1602348455130-1').children('.module');
});
      
          jQuery(function() {
        var $module = jQuery('#m-1602348455130-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
      
          jQuery(function() {
  var $module = jQuery('#m-1602348455130-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
      
          jQuery(function() {
  var $module = jQuery('#m-1602348511486').children('.module');
  $module.gfV3Product();
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1602348511486-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});
      
          jQuery(function() {
  var $module = jQuery('#m-1602348511486-1').children('.module');
});
      
          jQuery(function() {
        var $module = jQuery('#m-1602348511486-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
      
          jQuery(function() {
  var $module = jQuery('#m-1602348511486-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
      
          jQuery(function() {
  var $module = jQuery('#m-1602637165592').children('.module');
  $module.gfV3Product();
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1602637165592-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});
      
          jQuery(function() {
  var $module = jQuery('#m-1602637165592-1').children('.module');
});
      
          jQuery(function() {
        var $module = jQuery('#m-1602637165592-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
      
          jQuery(function() {
  var $module = jQuery('#m-1602637165592-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
      
      