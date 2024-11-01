

      
          jQuery(function() {
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  var $module = jQuery('#m-1600881989097').children('.module');
  if (mode == 'dev') {
      jQuery('#m-1600881989097').attr('data-name', '').css('background-image', 'none').removeAttr('data-image');
      
      var flag = true;
      var $bkLiquid = parent.jQuery('body').find('#gfFrame').contents().find('#module-1600881989097');
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
                  jQuery('#m-1600881989097').css('background-image', 'url(' + imageUrl + ')').css('min-height', '100px').attr('data-image', 'true');
              }
              if (name != '' && name != 'Custom Code') {
                  flag = false;
                  jQuery('#m-1600881989097').attr('data-name', name);
              }
          } catch(error) {
              console.log(error);
          }
      }
      if (flag) {
          jQuery('#m-1600881989097').attr('data-name', 'Right click on the module, then choose Edit Html / Liquid option to start writing your custom code.');
      }
  }
});
      
        jQuery(function() {
            var $hero = jQuery('#m-1600881955702');
            var $module = jQuery('#m-1600881955702').children('.module');

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
  var $module = jQuery('#m-1600881955660').children('.module');
  if (mode == 'dev') {
      jQuery('#m-1600881955660').attr('data-name', '').css('background-image', 'none').removeAttr('data-image');
      
      var flag = true;
      var $bkLiquid = parent.jQuery('body').find('#gfFrame').contents().find('#module-1600881955660');
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
                  jQuery('#m-1600881955660').css('background-image', 'url(' + imageUrl + ')').css('min-height', '100px').attr('data-image', 'true');
              }
              if (name != '' && name != 'Custom Code') {
                  flag = false;
                  jQuery('#m-1600881955660').attr('data-name', name);
              }
          } catch(error) {
              console.log(error);
          }
      }
      if (flag) {
          jQuery('#m-1600881955660').attr('data-name', 'Right click on the module, then choose Edit Html / Liquid option to start writing your custom code.');
      }
  }
});
      
      
          jQuery(function() {
  var $module = jQuery('#m-1600882079370').children('.module');
});
      
    jQuery(function() {var $module = jQuery('#m-1600882079370-child1').children('.module');}); jQuery(function() {var $module = jQuery('#m-1600882079370-child1-0').children('.module');}); jQuery(function() { var $module = jQuery('#m-1600882079370-child1-1').children('.module');}); 
          jQuery(function() {
    var $module = jQuery('#m-1600882079370-child1-2').children('.module');
});
      jQuery(function() {var $module = jQuery('#m-1600882079370-child2').children('.module');}); jQuery(function() {var $module = jQuery('#m-1600882079370-child2-0').children('.module');}); jQuery(function() { var $module = jQuery('#m-1600882079370-child2-1').children('.module');}); 
          jQuery(function() {
    var $module = jQuery('#m-1600882079370-child2-2').children('.module');
});
      jQuery(function() {var $module = jQuery('#m-1600882079370-child3').children('.module');}); jQuery(function() {var $module = jQuery('#m-1600882079370-child3-0').children('.module');}); jQuery(function() { var $module = jQuery('#m-1600882079370-child3-1').children('.module');}); 
          jQuery(function() {
    var $module = jQuery('#m-1600882079370-child3-2').children('.module');
});
      jQuery(function() {var $module = jQuery('#m-1600882079370-child4').children('.module');}); jQuery(function() {var $module = jQuery('#m-1600882079370-child4-0').children('.module');}); jQuery(function() { var $module = jQuery('#m-1600882079370-child4-1').children('.module');}); 
          jQuery(function() {
    var $module = jQuery('#m-1600882079370-child4-2').children('.module');
});
      jQuery(function() {var $module = jQuery('#m-1600882079370-child5').children('.module');}); jQuery(function() {var $module = jQuery('#m-1600882079370-child5-0').children('.module');}); jQuery(function() { var $module = jQuery('#m-1600882079370-child5-1').children('.module');}); 
          jQuery(function() {
    var $module = jQuery('#m-1600882079370-child5-2').children('.module');
});
      jQuery(function() {var $module = jQuery('#m-1600882079370-child6').children('.module');}); jQuery(function() {var $module = jQuery('#m-1600882079370-child6-0').children('.module');}); jQuery(function() { var $module = jQuery('#m-1600882079370-child6-1').children('.module');}); 
          jQuery(function() {
    var $module = jQuery('#m-1600882079370-child6-2').children('.module');
});
      jQuery(function() {var $module = jQuery('#m-1600882079370-child7').children('.module');}); jQuery(function() {var $module = jQuery('#m-1600882079370-child7-0').children('.module');}); jQuery(function() { var $module = jQuery('#m-1600882079370-child7-1').children('.module');}); 
          jQuery(function() {
    var $module = jQuery('#m-1600882079370-child7-2').children('.module');
});
      jQuery(function() {var $module = jQuery('#m-1600882079370-child8').children('.module');}); jQuery(function() {var $module = jQuery('#m-1600882079370-child8-0').children('.module');}); jQuery(function() { var $module = jQuery('#m-1600882079370-child8-1').children('.module');}); 
          jQuery(function() {
    var $module = jQuery('#m-1600882079370-child8-2').children('.module');
});
      jQuery(function() {var $module = jQuery('#m-1600882079370-child9').children('.module');}); jQuery(function() {var $module = jQuery('#m-1600882079370-child9-0').children('.module');}); jQuery(function() { var $module = jQuery('#m-1600882079370-child9-1').children('.module');}); 
          jQuery(function() {
    var $module = jQuery('#m-1600882079370-child9-2').children('.module');
});
      jQuery(function() {var $module = jQuery('#m-1600882079370-child10').children('.module');}); jQuery(function() {var $module = jQuery('#m-1600882079370-child10-0').children('.module');}); jQuery(function() { var $module = jQuery('#m-1600882079370-child10-1').children('.module');}); 
          jQuery(function() {
    var $module = jQuery('#m-1600882079370-child10-2').children('.module');
});
      jQuery(function() {var $module = jQuery('#m-1600882079370-child11').children('.module');}); jQuery(function() {var $module = jQuery('#m-1600882079370-child11-0').children('.module');}); jQuery(function() { var $module = jQuery('#m-1600882079370-child11-1').children('.module');}); 
          jQuery(function() {
    var $module = jQuery('#m-1600882079370-child11-2').children('.module');
});
      jQuery(function() {var $module = jQuery('#m-1600882079370-child12').children('.module');}); jQuery(function() {var $module = jQuery('#m-1600882079370-child12-0').children('.module');}); jQuery(function() { var $module = jQuery('#m-1600882079370-child12-1').children('.module');}); 
          jQuery(function() {
    var $module = jQuery('#m-1600882079370-child12-2').children('.module');
});
      jQuery(function() {var $module = jQuery('#m-1600882079370-child13').children('.module');}); jQuery(function() {var $module = jQuery('#m-1600882079370-child13-0').children('.module');}); jQuery(function() { var $module = jQuery('#m-1600882079370-child13-1').children('.module');}); 
          jQuery(function() {
    var $module = jQuery('#m-1600882079370-child13-2').children('.module');
});
      jQuery(function() {var $module = jQuery('#m-1600882079370-child14').children('.module');}); jQuery(function() {var $module = jQuery('#m-1600882079370-child14-0').children('.module');}); jQuery(function() { var $module = jQuery('#m-1600882079370-child14-1').children('.module');}); 
          jQuery(function() {
    var $module = jQuery('#m-1600882079370-child14-2').children('.module');
});
      jQuery(function() {var $module = jQuery('#m-1600882079370-child15').children('.module');}); jQuery(function() {var $module = jQuery('#m-1600882079370-child15-0').children('.module');}); jQuery(function() { var $module = jQuery('#m-1600882079370-child15-1').children('.module');}); 
          jQuery(function() {
    var $module = jQuery('#m-1600882079370-child15-2').children('.module');
});
      jQuery(function() {var $module = jQuery('#m-1600882079370-child16').children('.module');}); jQuery(function() {var $module = jQuery('#m-1600882079370-child16-0').children('.module');}); jQuery(function() { var $module = jQuery('#m-1600882079370-child16-1').children('.module');}); 
          jQuery(function() {
    var $module = jQuery('#m-1600882079370-child16-2').children('.module');
});
      
      
      
      
      
      
      