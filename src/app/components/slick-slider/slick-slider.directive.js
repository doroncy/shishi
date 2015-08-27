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
      templateUrl: '/app/components/slick-slider/slick-slider.html',
      controller: slickSliderCtrl,
      controllerAs: 'slickSliderCtrl',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function slickSliderCtrl($timeout, $element) {
      var vm = this;

      $timeout(function() {
        $element.slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          autoplay: true,
          //adaptiveHeight: false,
          //mobileFirst: true,
          dots: true,
          infinite: true,
          autoplaySpeed: 10000,
          speed: 500,
          fade: true,
          pauseOnDotsHover: true,
        });
      });
    }
  }

})();
