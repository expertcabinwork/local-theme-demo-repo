

      
          jQuery(function() {
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  var $module = jQuery('#m-1602523880390').children('.module');
  if (mode == 'dev') {
      jQuery('#m-1602523880390').attr('data-name', '').css('background-image', 'none').removeAttr('data-image');
      
      var flag = true;
      var $bkLiquid = parent.jQuery('body').find('#gfFrame').contents().find('#module-1602523880390');
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
                  jQuery('#m-1602523880390').css('background-image', 'url(' + imageUrl + ')').css('min-height', '100px').attr('data-image', 'true');
              }
              if (name != '' && name != 'Custom Code') {
                  flag = false;
                  jQuery('#m-1602523880390').attr('data-name', name);
              }
          } catch(error) {
              console.log(error);
          }
      }
      if (flag) {
          jQuery('#m-1602523880390').attr('data-name', 'Right click on the module, then choose Edit Html / Liquid option to start writing your custom code.');
      }
  }
});
      
        jQuery(function() {
            var $hero = jQuery('#m-1602523854833');
            var $module = jQuery('#m-1602523854833').children('.module');

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
  var $module = jQuery('#m-1602523854799').children('.module');
  if (mode == 'dev') {
      jQuery('#m-1602523854799').attr('data-name', '').css('background-image', 'none').removeAttr('data-image');
      
      var flag = true;
      var $bkLiquid = parent.jQuery('body').find('#gfFrame').contents().find('#module-1602523854799');
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
                  jQuery('#m-1602523854799').css('background-image', 'url(' + imageUrl + ')').css('min-height', '100px').attr('data-image', 'true');
              }
              if (name != '' && name != 'Custom Code') {
                  flag = false;
                  jQuery('#m-1602523854799').attr('data-name', name);
              }
          } catch(error) {
              console.log(error);
          }
      }
      if (flag) {
          jQuery('#m-1602523854799').attr('data-name', 'Right click on the module, then choose Edit Html / Liquid option to start writing your custom code.');
      }
  }
});
      
      
          jQuery(function() {
  var $module = jQuery('#m-1602523946844').children('.module');
});
      
    jQuery(function() {var $module = jQuery('#m-1602523946844-child1').children('.module');}); jQuery(function() {var $module = jQuery('#m-1602523946844-child1-0').children('.module');}); jQuery(function() { var $module = jQuery('#m-1602523946844-child1-1').children('.module');}); jQuery(function() {var $module = jQuery('#m-1602523946844-child1-2').children('.module');}); 
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child1-4').children('.module');
});
      
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child1-3').children('.module');
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child1-5').children('.module');
    var btnLabel = $module.attr('data-btnlabel');
    
    if ($module.attr('data-modelink') == 'auto'){
        $module.attr('data-editlink', '');
    }
    
    $module.gfSocialShare({
        btnLabel: btnLabel
    });
});
      jQuery(function() {var $module = jQuery('#m-1602523946844-child2').children('.module');}); jQuery(function() {var $module = jQuery('#m-1602523946844-child2-0').children('.module');}); jQuery(function() { var $module = jQuery('#m-1602523946844-child2-1').children('.module');}); jQuery(function() {var $module = jQuery('#m-1602523946844-child2-2').children('.module');}); 
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child2-4').children('.module');
});
      
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child2-3').children('.module');
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child2-5').children('.module');
    var btnLabel = $module.attr('data-btnlabel');
    
    if ($module.attr('data-modelink') == 'auto'){
        $module.attr('data-editlink', '');
    }
    
    $module.gfSocialShare({
        btnLabel: btnLabel
    });
});
      jQuery(function() {var $module = jQuery('#m-1602523946844-child3').children('.module');}); jQuery(function() {var $module = jQuery('#m-1602523946844-child3-0').children('.module');}); jQuery(function() { var $module = jQuery('#m-1602523946844-child3-1').children('.module');}); jQuery(function() {var $module = jQuery('#m-1602523946844-child3-2').children('.module');}); 
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child3-4').children('.module');
});
      
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child3-3').children('.module');
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child3-5').children('.module');
    var btnLabel = $module.attr('data-btnlabel');
    
    if ($module.attr('data-modelink') == 'auto'){
        $module.attr('data-editlink', '');
    }
    
    $module.gfSocialShare({
        btnLabel: btnLabel
    });
});
      jQuery(function() {var $module = jQuery('#m-1602523946844-child4').children('.module');}); jQuery(function() {var $module = jQuery('#m-1602523946844-child4-0').children('.module');}); jQuery(function() { var $module = jQuery('#m-1602523946844-child4-1').children('.module');}); jQuery(function() {var $module = jQuery('#m-1602523946844-child4-2').children('.module');}); 
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child4-4').children('.module');
});
      
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child4-3').children('.module');
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child4-5').children('.module');
    var btnLabel = $module.attr('data-btnlabel');
    
    if ($module.attr('data-modelink') == 'auto'){
        $module.attr('data-editlink', '');
    }
    
    $module.gfSocialShare({
        btnLabel: btnLabel
    });
});
      jQuery(function() {var $module = jQuery('#m-1602523946844-child5').children('.module');}); jQuery(function() {var $module = jQuery('#m-1602523946844-child5-0').children('.module');}); jQuery(function() { var $module = jQuery('#m-1602523946844-child5-1').children('.module');}); jQuery(function() {var $module = jQuery('#m-1602523946844-child5-2').children('.module');}); 
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child5-4').children('.module');
});
      
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child5-3').children('.module');
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child5-5').children('.module');
    var btnLabel = $module.attr('data-btnlabel');
    
    if ($module.attr('data-modelink') == 'auto'){
        $module.attr('data-editlink', '');
    }
    
    $module.gfSocialShare({
        btnLabel: btnLabel
    });
});
      jQuery(function() {var $module = jQuery('#m-1602523946844-child6').children('.module');}); jQuery(function() {var $module = jQuery('#m-1602523946844-child6-0').children('.module');}); jQuery(function() { var $module = jQuery('#m-1602523946844-child6-1').children('.module');}); jQuery(function() {var $module = jQuery('#m-1602523946844-child6-2').children('.module');}); 
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child6-4').children('.module');
});
      
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child6-3').children('.module');
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child6-5').children('.module');
    var btnLabel = $module.attr('data-btnlabel');
    
    if ($module.attr('data-modelink') == 'auto'){
        $module.attr('data-editlink', '');
    }
    
    $module.gfSocialShare({
        btnLabel: btnLabel
    });
});
      jQuery(function() {var $module = jQuery('#m-1602523946844-child7').children('.module');}); jQuery(function() {var $module = jQuery('#m-1602523946844-child7-0').children('.module');}); jQuery(function() { var $module = jQuery('#m-1602523946844-child7-1').children('.module');}); jQuery(function() {var $module = jQuery('#m-1602523946844-child7-2').children('.module');}); 
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child7-4').children('.module');
});
      
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child7-3').children('.module');
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child7-5').children('.module');
    var btnLabel = $module.attr('data-btnlabel');
    
    if ($module.attr('data-modelink') == 'auto'){
        $module.attr('data-editlink', '');
    }
    
    $module.gfSocialShare({
        btnLabel: btnLabel
    });
});
      
      
      
      
      
      
      