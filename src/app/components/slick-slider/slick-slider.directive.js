(function() {
  'use strict';

  angular
    .module('shishi')
    .directive('slickSlider', slickSlider);

  /** @ngInject */
  function slickSlider() {
    var directive = {
      restrict: 'E',
      replace: true,
      scope: {
        images: '='
      },
      templateUrl: 'app/components/slick-slider/slick-slider.html',
      controller: slickSliderCtrl,
      controllerAs: 'slickSliderCtrl',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function slickSliderCtrl($timeout, $element, $window) {    
      var sliderParent = $element.parents('#main-gallery-wrap');

      init();

      function init() {
        setViewport();
        $timeout(function() {
          $element.slick({
            draggable: false,
            touchMove: true,
            dots:true,
            arrows:false,
            speed:2000,
            fade:true,
            cssEase:'ease-in-out',
            autoplay:true,
            autoplaySpeed:2000,
            infinite:true
          });
        });
      }

      function setViewport() {
        sliderParent.css({
          height: $window.jQuery($window).height() + 'px'
        });
      }

      $window.jQuery($window).resizeend(function() {
        setViewport();
      });
    }
  }

})();
