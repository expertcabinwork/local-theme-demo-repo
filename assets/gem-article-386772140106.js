

      
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
      jQuery(function() {var $module = jQuery('#m-1602523946844-child8').children('.module');}); jQuery(function() {var $module = jQuery('#m-1602523946844-child8-0').children('.module');}); jQuery(function() { var $module = jQuery('#m-1602523946844-child8-1').children('.module');}); jQuery(function() {var $module = jQuery('#m-1602523946844-child8-2').children('.module');}); 
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child8-4').children('.module');
});
      
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child8-3').children('.module');
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child8-5').children('.module');
    var btnLabel = $module.attr('data-btnlabel');
    
    if ($module.attr('data-modelink') == 'auto'){
        $module.attr('data-editlink', '');
    }
    
    $module.gfSocialShare({
        btnLabel: btnLabel
    });
});
      jQuery(function() {var $module = jQuery('#m-1602523946844-child9').children('.module');}); jQuery(function() {var $module = jQuery('#m-1602523946844-child9-0').children('.module');}); jQuery(function() { var $module = jQuery('#m-1602523946844-child9-1').children('.module');}); jQuery(function() {var $module = jQuery('#m-1602523946844-child9-2').children('.module');}); 
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child9-4').children('.module');
});
      
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child9-3').children('.module');
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child9-5').children('.module');
    var btnLabel = $module.attr('data-btnlabel');
    
    if ($module.attr('data-modelink') == 'auto'){
        $module.attr('data-editlink', '');
    }
    
    $module.gfSocialShare({
        btnLabel: btnLabel
    });
});
      jQuery(function() {var $module = jQuery('#m-1602523946844-child10').children('.module');}); jQuery(function() {var $module = jQuery('#m-1602523946844-child10-0').children('.module');}); jQuery(function() { var $module = jQuery('#m-1602523946844-child10-1').children('.module');}); jQuery(function() {var $module = jQuery('#m-1602523946844-child10-2').children('.module');}); 
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child10-4').children('.module');
});
      
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child10-3').children('.module');
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child10-5').children('.module');
    var btnLabel = $module.attr('data-btnlabel');
    
    if ($module.attr('data-modelink') == 'auto'){
        $module.attr('data-editlink', '');
    }
    
    $module.gfSocialShare({
        btnLabel: btnLabel
    });
});
      jQuery(function() {var $module = jQuery('#m-1602523946844-child11').children('.module');}); jQuery(function() {var $module = jQuery('#m-1602523946844-child11-0').children('.module');}); jQuery(function() { var $module = jQuery('#m-1602523946844-child11-1').children('.module');}); jQuery(function() {var $module = jQuery('#m-1602523946844-child11-2').children('.module');}); 
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child11-4').children('.module');
});
      
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child11-3').children('.module');
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child11-5').children('.module');
    var btnLabel = $module.attr('data-btnlabel');
    
    if ($module.attr('data-modelink') == 'auto'){
        $module.attr('data-editlink', '');
    }
    
    $module.gfSocialShare({
        btnLabel: btnLabel
    });
});
      jQuery(function() {var $module = jQuery('#m-1602523946844-child12').children('.module');}); jQuery(function() {var $module = jQuery('#m-1602523946844-child12-0').children('.module');}); jQuery(function() { var $module = jQuery('#m-1602523946844-child12-1').children('.module');}); jQuery(function() {var $module = jQuery('#m-1602523946844-child12-2').children('.module');}); 
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child12-4').children('.module');
});
      
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child12-3').children('.module');
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child12-5').children('.module');
    var btnLabel = $module.attr('data-btnlabel');
    
    if ($module.attr('data-modelink') == 'auto'){
        $module.attr('data-editlink', '');
    }
    
    $module.gfSocialShare({
        btnLabel: btnLabel
    });
});
      jQuery(function() {var $module = jQuery('#m-1602523946844-child13').children('.module');}); jQuery(function() {var $module = jQuery('#m-1602523946844-child13-0').children('.module');}); jQuery(function() { var $module = jQuery('#m-1602523946844-child13-1').children('.module');}); jQuery(function() {var $module = jQuery('#m-1602523946844-child13-2').children('.module');}); 
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child13-4').children('.module');
});
      
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child13-3').children('.module');
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child13-5').children('.module');
    var btnLabel = $module.attr('data-btnlabel');
    
    if ($module.attr('data-modelink') == 'auto'){
        $module.attr('data-editlink', '');
    }
    
    $module.gfSocialShare({
        btnLabel: btnLabel
    });
});
      jQuery(function() {var $module = jQuery('#m-1602523946844-child14').children('.module');}); jQuery(function() {var $module = jQuery('#m-1602523946844-child14-0').children('.module');}); jQuery(function() { var $module = jQuery('#m-1602523946844-child14-1').children('.module');}); jQuery(function() {var $module = jQuery('#m-1602523946844-child14-2').children('.module');}); 
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child14-4').children('.module');
});
      
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child14-3').children('.module');
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child14-5').children('.module');
    var btnLabel = $module.attr('data-btnlabel');
    
    if ($module.attr('data-modelink') == 'auto'){
        $module.attr('data-editlink', '');
    }
    
    $module.gfSocialShare({
        btnLabel: btnLabel
    });
});
      jQuery(function() {var $module = jQuery('#m-1602523946844-child15').children('.module');}); jQuery(function() {var $module = jQuery('#m-1602523946844-child15-0').children('.module');}); jQuery(function() { var $module = jQuery('#m-1602523946844-child15-1').children('.module');}); jQuery(function() {var $module = jQuery('#m-1602523946844-child15-2').children('.module');}); 
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child15-4').children('.module');
});
      
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child15-3').children('.module');
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child15-5').children('.module');
    var btnLabel = $module.attr('data-btnlabel');
    
    if ($module.attr('data-modelink') == 'auto'){
        $module.attr('data-editlink', '');
    }
    
    $module.gfSocialShare({
        btnLabel: btnLabel
    });
});
      jQuery(function() {var $module = jQuery('#m-1602523946844-child16').children('.module');}); jQuery(function() {var $module = jQuery('#m-1602523946844-child16-0').children('.module');}); jQuery(function() { var $module = jQuery('#m-1602523946844-child16-1').children('.module');}); jQuery(function() {var $module = jQuery('#m-1602523946844-child16-2').children('.module');}); 
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child16-4').children('.module');
});
      
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child16-3').children('.module');
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child16-5').children('.module');
    var btnLabel = $module.attr('data-btnlabel');
    
    if ($module.attr('data-modelink') == 'auto'){
        $module.attr('data-editlink', '');
    }
    
    $module.gfSocialShare({
        btnLabel: btnLabel
    });
});
      jQuery(function() {var $module = jQuery('#m-1602523946844-child17').children('.module');}); jQuery(function() {var $module = jQuery('#m-1602523946844-child17-0').children('.module');}); jQuery(function() { var $module = jQuery('#m-1602523946844-child17-1').children('.module');}); jQuery(function() {var $module = jQuery('#m-1602523946844-child17-2').children('.module');}); 
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child17-4').children('.module');
});
      
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child17-3').children('.module');
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child17-5').children('.module');
    var btnLabel = $module.attr('data-btnlabel');
    
    if ($module.attr('data-modelink') == 'auto'){
        $module.attr('data-editlink', '');
    }
    
    $module.gfSocialShare({
        btnLabel: btnLabel
    });
});
      jQuery(function() {var $module = jQuery('#m-1602523946844-child18').children('.module');}); jQuery(function() {var $module = jQuery('#m-1602523946844-child18-0').children('.module');}); jQuery(function() { var $module = jQuery('#m-1602523946844-child18-1').children('.module');}); jQuery(function() {var $module = jQuery('#m-1602523946844-child18-2').children('.module');}); 
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child18-4').children('.module');
});
      
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child18-3').children('.module');
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child18-5').children('.module');
    var btnLabel = $module.attr('data-btnlabel');
    
    if ($module.attr('data-modelink') == 'auto'){
        $module.attr('data-editlink', '');
    }
    
    $module.gfSocialShare({
        btnLabel: btnLabel
    });
});
      jQuery(function() {var $module = jQuery('#m-1602523946844-child19').children('.module');}); jQuery(function() {var $module = jQuery('#m-1602523946844-child19-0').children('.module');}); jQuery(function() { var $module = jQuery('#m-1602523946844-child19-1').children('.module');}); jQuery(function() {var $module = jQuery('#m-1602523946844-child19-2').children('.module');}); 
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child19-4').children('.module');
});
      
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child19-3').children('.module');
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child19-5').children('.module');
    var btnLabel = $module.attr('data-btnlabel');
    
    if ($module.attr('data-modelink') == 'auto'){
        $module.attr('data-editlink', '');
    }
    
    $module.gfSocialShare({
        btnLabel: btnLabel
    });
});
      jQuery(function() {var $module = jQuery('#m-1602523946844-child20').children('.module');}); jQuery(function() {var $module = jQuery('#m-1602523946844-child20-0').children('.module');}); jQuery(function() { var $module = jQuery('#m-1602523946844-child20-1').children('.module');}); jQuery(function() {var $module = jQuery('#m-1602523946844-child20-2').children('.module');}); 
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child20-4').children('.module');
});
      
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child20-3').children('.module');
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child20-5').children('.module');
    var btnLabel = $module.attr('data-btnlabel');
    
    if ($module.attr('data-modelink') == 'auto'){
        $module.attr('data-editlink', '');
    }
    
    $module.gfSocialShare({
        btnLabel: btnLabel
    });
});
      jQuery(function() {var $module = jQuery('#m-1602523946844-child21').children('.module');}); jQuery(function() {var $module = jQuery('#m-1602523946844-child21-0').children('.module');}); jQuery(function() { var $module = jQuery('#m-1602523946844-child21-1').children('.module');}); jQuery(function() {var $module = jQuery('#m-1602523946844-child21-2').children('.module');}); 
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child21-4').children('.module');
});
      
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child21-3').children('.module');
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child21-5').children('.module');
    var btnLabel = $module.attr('data-btnlabel');
    
    if ($module.attr('data-modelink') == 'auto'){
        $module.attr('data-editlink', '');
    }
    
    $module.gfSocialShare({
        btnLabel: btnLabel
    });
});
      jQuery(function() {var $module = jQuery('#m-1602523946844-child22').children('.module');}); jQuery(function() {var $module = jQuery('#m-1602523946844-child22-0').children('.module');}); jQuery(function() { var $module = jQuery('#m-1602523946844-child22-1').children('.module');}); jQuery(function() {var $module = jQuery('#m-1602523946844-child22-2').children('.module');}); 
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child22-4').children('.module');
});
      
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child22-3').children('.module');
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child22-5').children('.module');
    var btnLabel = $module.attr('data-btnlabel');
    
    if ($module.attr('data-modelink') == 'auto'){
        $module.attr('data-editlink', '');
    }
    
    $module.gfSocialShare({
        btnLabel: btnLabel
    });
});
      jQuery(function() {var $module = jQuery('#m-1602523946844-child23').children('.module');}); jQuery(function() {var $module = jQuery('#m-1602523946844-child23-0').children('.module');}); jQuery(function() { var $module = jQuery('#m-1602523946844-child23-1').children('.module');}); jQuery(function() {var $module = jQuery('#m-1602523946844-child23-2').children('.module');}); 
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child23-4').children('.module');
});
      
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child23-3').children('.module');
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child23-5').children('.module');
    var btnLabel = $module.attr('data-btnlabel');
    
    if ($module.attr('data-modelink') == 'auto'){
        $module.attr('data-editlink', '');
    }
    
    $module.gfSocialShare({
        btnLabel: btnLabel
    });
});
      jQuery(function() {var $module = jQuery('#m-1602523946844-child24').children('.module');}); jQuery(function() {var $module = jQuery('#m-1602523946844-child24-0').children('.module');}); jQuery(function() { var $module = jQuery('#m-1602523946844-child24-1').children('.module');}); jQuery(function() {var $module = jQuery('#m-1602523946844-child24-2').children('.module');}); 
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child24-4').children('.module');
});
      
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child24-3').children('.module');
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child24-5').children('.module');
    var btnLabel = $module.attr('data-btnlabel');
    
    if ($module.attr('data-modelink') == 'auto'){
        $module.attr('data-editlink', '');
    }
    
    $module.gfSocialShare({
        btnLabel: btnLabel
    });
});
      jQuery(function() {var $module = jQuery('#m-1602523946844-child25').children('.module');}); jQuery(function() {var $module = jQuery('#m-1602523946844-child25-0').children('.module');}); jQuery(function() { var $module = jQuery('#m-1602523946844-child25-1').children('.module');}); jQuery(function() {var $module = jQuery('#m-1602523946844-child25-2').children('.module');}); 
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child25-4').children('.module');
});
      
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child25-3').children('.module');
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child25-5').children('.module');
    var btnLabel = $module.attr('data-btnlabel');
    
    if ($module.attr('data-modelink') == 'auto'){
        $module.attr('data-editlink', '');
    }
    
    $module.gfSocialShare({
        btnLabel: btnLabel
    });
});
      jQuery(function() {var $module = jQuery('#m-1602523946844-child26').children('.module');}); jQuery(function() {var $module = jQuery('#m-1602523946844-child26-0').children('.module');}); jQuery(function() { var $module = jQuery('#m-1602523946844-child26-1').children('.module');}); jQuery(function() {var $module = jQuery('#m-1602523946844-child26-2').children('.module');}); 
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child26-4').children('.module');
});
      
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child26-3').children('.module');
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child26-5').children('.module');
    var btnLabel = $module.attr('data-btnlabel');
    
    if ($module.attr('data-modelink') == 'auto'){
        $module.attr('data-editlink', '');
    }
    
    $module.gfSocialShare({
        btnLabel: btnLabel
    });
});
      jQuery(function() {var $module = jQuery('#m-1602523946844-child27').children('.module');}); jQuery(function() {var $module = jQuery('#m-1602523946844-child27-0').children('.module');}); jQuery(function() { var $module = jQuery('#m-1602523946844-child27-1').children('.module');}); jQuery(function() {var $module = jQuery('#m-1602523946844-child27-2').children('.module');}); 
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child27-4').children('.module');
});
      
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child27-3').children('.module');
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child27-5').children('.module');
    var btnLabel = $module.attr('data-btnlabel');
    
    if ($module.attr('data-modelink') == 'auto'){
        $module.attr('data-editlink', '');
    }
    
    $module.gfSocialShare({
        btnLabel: btnLabel
    });
});
      jQuery(function() {var $module = jQuery('#m-1602523946844-child28').children('.module');}); jQuery(function() {var $module = jQuery('#m-1602523946844-child28-0').children('.module');}); jQuery(function() { var $module = jQuery('#m-1602523946844-child28-1').children('.module');}); jQuery(function() {var $module = jQuery('#m-1602523946844-child28-2').children('.module');}); 
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child28-4').children('.module');
});
      
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child28-3').children('.module');
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child28-5').children('.module');
    var btnLabel = $module.attr('data-btnlabel');
    
    if ($module.attr('data-modelink') == 'auto'){
        $module.attr('data-editlink', '');
    }
    
    $module.gfSocialShare({
        btnLabel: btnLabel
    });
});
      jQuery(function() {var $module = jQuery('#m-1602523946844-child29').children('.module');}); jQuery(function() {var $module = jQuery('#m-1602523946844-child29-0').children('.module');}); jQuery(function() { var $module = jQuery('#m-1602523946844-child29-1').children('.module');}); jQuery(function() {var $module = jQuery('#m-1602523946844-child29-2').children('.module');}); 
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child29-4').children('.module');
});
      
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child29-3').children('.module');
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child29-5').children('.module');
    var btnLabel = $module.attr('data-btnlabel');
    
    if ($module.attr('data-modelink') == 'auto'){
        $module.attr('data-editlink', '');
    }
    
    $module.gfSocialShare({
        btnLabel: btnLabel
    });
});
      jQuery(function() {var $module = jQuery('#m-1602523946844-child30').children('.module');}); jQuery(function() {var $module = jQuery('#m-1602523946844-child30-0').children('.module');}); jQuery(function() { var $module = jQuery('#m-1602523946844-child30-1').children('.module');}); jQuery(function() {var $module = jQuery('#m-1602523946844-child30-2').children('.module');}); 
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child30-4').children('.module');
});
      
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child30-3').children('.module');
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child30-5').children('.module');
    var btnLabel = $module.attr('data-btnlabel');
    
    if ($module.attr('data-modelink') == 'auto'){
        $module.attr('data-editlink', '');
    }
    
    $module.gfSocialShare({
        btnLabel: btnLabel
    });
});
      jQuery(function() {var $module = jQuery('#m-1602523946844-child31').children('.module');}); jQuery(function() {var $module = jQuery('#m-1602523946844-child31-0').children('.module');}); jQuery(function() { var $module = jQuery('#m-1602523946844-child31-1').children('.module');}); jQuery(function() {var $module = jQuery('#m-1602523946844-child31-2').children('.module');}); 
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child31-4').children('.module');
});
      
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child31-3').children('.module');
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child31-5').children('.module');
    var btnLabel = $module.attr('data-btnlabel');
    
    if ($module.attr('data-modelink') == 'auto'){
        $module.attr('data-editlink', '');
    }
    
    $module.gfSocialShare({
        btnLabel: btnLabel
    });
});
      jQuery(function() {var $module = jQuery('#m-1602523946844-child32').children('.module');}); jQuery(function() {var $module = jQuery('#m-1602523946844-child32-0').children('.module');}); jQuery(function() { var $module = jQuery('#m-1602523946844-child32-1').children('.module');}); jQuery(function() {var $module = jQuery('#m-1602523946844-child32-2').children('.module');}); 
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child32-4').children('.module');
});
      
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child32-3').children('.module');
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child32-5').children('.module');
    var btnLabel = $module.attr('data-btnlabel');
    
    if ($module.attr('data-modelink') == 'auto'){
        $module.attr('data-editlink', '');
    }
    
    $module.gfSocialShare({
        btnLabel: btnLabel
    });
});
      jQuery(function() {var $module = jQuery('#m-1602523946844-child33').children('.module');}); jQuery(function() {var $module = jQuery('#m-1602523946844-child33-0').children('.module');}); jQuery(function() { var $module = jQuery('#m-1602523946844-child33-1').children('.module');}); jQuery(function() {var $module = jQuery('#m-1602523946844-child33-2').children('.module');}); 
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child33-4').children('.module');
});
      
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child33-3').children('.module');
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child33-5').children('.module');
    var btnLabel = $module.attr('data-btnlabel');
    
    if ($module.attr('data-modelink') == 'auto'){
        $module.attr('data-editlink', '');
    }
    
    $module.gfSocialShare({
        btnLabel: btnLabel
    });
});
      jQuery(function() {var $module = jQuery('#m-1602523946844-child34').children('.module');}); jQuery(function() {var $module = jQuery('#m-1602523946844-child34-0').children('.module');}); jQuery(function() { var $module = jQuery('#m-1602523946844-child34-1').children('.module');}); jQuery(function() {var $module = jQuery('#m-1602523946844-child34-2').children('.module');}); 
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child34-4').children('.module');
});
      
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child34-3').children('.module');
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child34-5').children('.module');
    var btnLabel = $module.attr('data-btnlabel');
    
    if ($module.attr('data-modelink') == 'auto'){
        $module.attr('data-editlink', '');
    }
    
    $module.gfSocialShare({
        btnLabel: btnLabel
    });
});
      jQuery(function() {var $module = jQuery('#m-1602523946844-child35').children('.module');}); jQuery(function() {var $module = jQuery('#m-1602523946844-child35-0').children('.module');}); jQuery(function() { var $module = jQuery('#m-1602523946844-child35-1').children('.module');}); jQuery(function() {var $module = jQuery('#m-1602523946844-child35-2').children('.module');}); 
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child35-4').children('.module');
});
      
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child35-3').children('.module');
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child35-5').children('.module');
    var btnLabel = $module.attr('data-btnlabel');
    
    if ($module.attr('data-modelink') == 'auto'){
        $module.attr('data-editlink', '');
    }
    
    $module.gfSocialShare({
        btnLabel: btnLabel
    });
});
      jQuery(function() {var $module = jQuery('#m-1602523946844-child36').children('.module');}); jQuery(function() {var $module = jQuery('#m-1602523946844-child36-0').children('.module');}); jQuery(function() { var $module = jQuery('#m-1602523946844-child36-1').children('.module');}); jQuery(function() {var $module = jQuery('#m-1602523946844-child36-2').children('.module');}); 
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child36-4').children('.module');
});
      
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child36-3').children('.module');
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child36-5').children('.module');
    var btnLabel = $module.attr('data-btnlabel');
    
    if ($module.attr('data-modelink') == 'auto'){
        $module.attr('data-editlink', '');
    }
    
    $module.gfSocialShare({
        btnLabel: btnLabel
    });
});
      jQuery(function() {var $module = jQuery('#m-1602523946844-child37').children('.module');}); jQuery(function() {var $module = jQuery('#m-1602523946844-child37-0').children('.module');}); jQuery(function() { var $module = jQuery('#m-1602523946844-child37-1').children('.module');}); jQuery(function() {var $module = jQuery('#m-1602523946844-child37-2').children('.module');}); 
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child37-4').children('.module');
});
      
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child37-3').children('.module');
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child37-5').children('.module');
    var btnLabel = $module.attr('data-btnlabel');
    
    if ($module.attr('data-modelink') == 'auto'){
        $module.attr('data-editlink', '');
    }
    
    $module.gfSocialShare({
        btnLabel: btnLabel
    });
});
      jQuery(function() {var $module = jQuery('#m-1602523946844-child38').children('.module');}); jQuery(function() {var $module = jQuery('#m-1602523946844-child38-0').children('.module');}); jQuery(function() { var $module = jQuery('#m-1602523946844-child38-1').children('.module');}); jQuery(function() {var $module = jQuery('#m-1602523946844-child38-2').children('.module');}); 
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child38-4').children('.module');
});
      
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child38-3').children('.module');
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child38-5').children('.module');
    var btnLabel = $module.attr('data-btnlabel');
    
    if ($module.attr('data-modelink') == 'auto'){
        $module.attr('data-editlink', '');
    }
    
    $module.gfSocialShare({
        btnLabel: btnLabel
    });
});
      jQuery(function() {var $module = jQuery('#m-1602523946844-child39').children('.module');}); jQuery(function() {var $module = jQuery('#m-1602523946844-child39-0').children('.module');}); jQuery(function() { var $module = jQuery('#m-1602523946844-child39-1').children('.module');}); jQuery(function() {var $module = jQuery('#m-1602523946844-child39-2').children('.module');}); 
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child39-4').children('.module');
});
      
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child39-3').children('.module');
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child39-5').children('.module');
    var btnLabel = $module.attr('data-btnlabel');
    
    if ($module.attr('data-modelink') == 'auto'){
        $module.attr('data-editlink', '');
    }
    
    $module.gfSocialShare({
        btnLabel: btnLabel
    });
});
      jQuery(function() {var $module = jQuery('#m-1602523946844-child40').children('.module');}); jQuery(function() {var $module = jQuery('#m-1602523946844-child40-0').children('.module');}); jQuery(function() { var $module = jQuery('#m-1602523946844-child40-1').children('.module');}); jQuery(function() {var $module = jQuery('#m-1602523946844-child40-2').children('.module');}); 
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child40-4').children('.module');
});
      
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child40-3').children('.module');
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child40-5').children('.module');
    var btnLabel = $module.attr('data-btnlabel');
    
    if ($module.attr('data-modelink') == 'auto'){
        $module.attr('data-editlink', '');
    }
    
    $module.gfSocialShare({
        btnLabel: btnLabel
    });
});
      jQuery(function() {var $module = jQuery('#m-1602523946844-child41').children('.module');}); jQuery(function() {var $module = jQuery('#m-1602523946844-child41-0').children('.module');}); jQuery(function() { var $module = jQuery('#m-1602523946844-child41-1').children('.module');}); jQuery(function() {var $module = jQuery('#m-1602523946844-child41-2').children('.module');}); 
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child41-4').children('.module');
});
      
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child41-3').children('.module');
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child41-5').children('.module');
    var btnLabel = $module.attr('data-btnlabel');
    
    if ($module.attr('data-modelink') == 'auto'){
        $module.attr('data-editlink', '');
    }
    
    $module.gfSocialShare({
        btnLabel: btnLabel
    });
});
      jQuery(function() {var $module = jQuery('#m-1602523946844-child42').children('.module');}); jQuery(function() {var $module = jQuery('#m-1602523946844-child42-0').children('.module');}); jQuery(function() { var $module = jQuery('#m-1602523946844-child42-1').children('.module');}); jQuery(function() {var $module = jQuery('#m-1602523946844-child42-2').children('.module');}); 
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child42-4').children('.module');
});
      
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child42-3').children('.module');
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child42-5').children('.module');
    var btnLabel = $module.attr('data-btnlabel');
    
    if ($module.attr('data-modelink') == 'auto'){
        $module.attr('data-editlink', '');
    }
    
    $module.gfSocialShare({
        btnLabel: btnLabel
    });
});
      jQuery(function() {var $module = jQuery('#m-1602523946844-child43').children('.module');}); jQuery(function() {var $module = jQuery('#m-1602523946844-child43-0').children('.module');}); jQuery(function() { var $module = jQuery('#m-1602523946844-child43-1').children('.module');}); jQuery(function() {var $module = jQuery('#m-1602523946844-child43-2').children('.module');}); 
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child43-4').children('.module');
});
      
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child43-3').children('.module');
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child43-5').children('.module');
    var btnLabel = $module.attr('data-btnlabel');
    
    if ($module.attr('data-modelink') == 'auto'){
        $module.attr('data-editlink', '');
    }
    
    $module.gfSocialShare({
        btnLabel: btnLabel
    });
});
      jQuery(function() {var $module = jQuery('#m-1602523946844-child44').children('.module');}); jQuery(function() {var $module = jQuery('#m-1602523946844-child44-0').children('.module');}); jQuery(function() { var $module = jQuery('#m-1602523946844-child44-1').children('.module');}); jQuery(function() {var $module = jQuery('#m-1602523946844-child44-2').children('.module');}); 
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child44-4').children('.module');
});
      
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child44-3').children('.module');
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child44-5').children('.module');
    var btnLabel = $module.attr('data-btnlabel');
    
    if ($module.attr('data-modelink') == 'auto'){
        $module.attr('data-editlink', '');
    }
    
    $module.gfSocialShare({
        btnLabel: btnLabel
    });
});
      jQuery(function() {var $module = jQuery('#m-1602523946844-child45').children('.module');}); jQuery(function() {var $module = jQuery('#m-1602523946844-child45-0').children('.module');}); jQuery(function() { var $module = jQuery('#m-1602523946844-child45-1').children('.module');}); jQuery(function() {var $module = jQuery('#m-1602523946844-child45-2').children('.module');}); 
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child45-4').children('.module');
});
      
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child45-3').children('.module');
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child45-5').children('.module');
    var btnLabel = $module.attr('data-btnlabel');
    
    if ($module.attr('data-modelink') == 'auto'){
        $module.attr('data-editlink', '');
    }
    
    $module.gfSocialShare({
        btnLabel: btnLabel
    });
});
      jQuery(function() {var $module = jQuery('#m-1602523946844-child46').children('.module');}); jQuery(function() {var $module = jQuery('#m-1602523946844-child46-0').children('.module');}); jQuery(function() { var $module = jQuery('#m-1602523946844-child46-1').children('.module');}); jQuery(function() {var $module = jQuery('#m-1602523946844-child46-2').children('.module');}); 
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child46-4').children('.module');
});
      
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child46-3').children('.module');
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child46-5').children('.module');
    var btnLabel = $module.attr('data-btnlabel');
    
    if ($module.attr('data-modelink') == 'auto'){
        $module.attr('data-editlink', '');
    }
    
    $module.gfSocialShare({
        btnLabel: btnLabel
    });
});
      jQuery(function() {var $module = jQuery('#m-1602523946844-child47').children('.module');}); jQuery(function() {var $module = jQuery('#m-1602523946844-child47-0').children('.module');}); jQuery(function() { var $module = jQuery('#m-1602523946844-child47-1').children('.module');}); jQuery(function() {var $module = jQuery('#m-1602523946844-child47-2').children('.module');}); 
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child47-4').children('.module');
});
      
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child47-3').children('.module');
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child47-5').children('.module');
    var btnLabel = $module.attr('data-btnlabel');
    
    if ($module.attr('data-modelink') == 'auto'){
        $module.attr('data-editlink', '');
    }
    
    $module.gfSocialShare({
        btnLabel: btnLabel
    });
});
      jQuery(function() {var $module = jQuery('#m-1602523946844-child48').children('.module');}); jQuery(function() {var $module = jQuery('#m-1602523946844-child48-0').children('.module');}); jQuery(function() { var $module = jQuery('#m-1602523946844-child48-1').children('.module');}); jQuery(function() {var $module = jQuery('#m-1602523946844-child48-2').children('.module');}); 
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child48-4').children('.module');
});
      
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child48-3').children('.module');
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child48-5').children('.module');
    var btnLabel = $module.attr('data-btnlabel');
    
    if ($module.attr('data-modelink') == 'auto'){
        $module.attr('data-editlink', '');
    }
    
    $module.gfSocialShare({
        btnLabel: btnLabel
    });
});
      jQuery(function() {var $module = jQuery('#m-1602523946844-child49').children('.module');}); jQuery(function() {var $module = jQuery('#m-1602523946844-child49-0').children('.module');}); jQuery(function() { var $module = jQuery('#m-1602523946844-child49-1').children('.module');}); jQuery(function() {var $module = jQuery('#m-1602523946844-child49-2').children('.module');}); 
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child49-4').children('.module');
});
      
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child49-3').children('.module');
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child49-5').children('.module');
    var btnLabel = $module.attr('data-btnlabel');
    
    if ($module.attr('data-modelink') == 'auto'){
        $module.attr('data-editlink', '');
    }
    
    $module.gfSocialShare({
        btnLabel: btnLabel
    });
});
      jQuery(function() {var $module = jQuery('#m-1602523946844-child50').children('.module');}); jQuery(function() {var $module = jQuery('#m-1602523946844-child50-0').children('.module');}); jQuery(function() { var $module = jQuery('#m-1602523946844-child50-1').children('.module');}); jQuery(function() {var $module = jQuery('#m-1602523946844-child50-2').children('.module');}); 
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child50-4').children('.module');
});
      
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child50-3').children('.module');
}); 
      
          jQuery(function() {
    var $module = jQuery('#m-1602523946844-child50-5').children('.module');
    var btnLabel = $module.attr('data-btnlabel');
    
    if ($module.attr('data-modelink') == 'auto'){
        $module.attr('data-editlink', '');
    }
    
    $module.gfSocialShare({
        btnLabel: btnLabel
    });
});
      
      
      
      
      
      
      