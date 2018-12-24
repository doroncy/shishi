(function() {
    'use strict';
  
    angular
      .module('shishi')
      .controller('CateringController', CateringController);
  
    /** @ngInject */
    function CateringController($timeout, $anchorScroll, $window) {
      var vm = this;
        
      $anchorScroll('catering');

      // Slider Gallery
      vm.sliderImages = ['catering-gallery1', 'catering-gallery2', 'catering-gallery3', 'catering-gallery4'];
        
      vm.logoColor = "white";
      var cateringSection = angular.element(".catering-section");      
      $window.jQuery($window).scroll(function() {
        var cateringSectionOffset = cateringSection.offset().top - angular.element($window).scrollTop();        
        var newLogoColor = 'white';        
        if (cateringSectionOffset < 150) {
          newLogoColor = 'red';
        }      
        if (newLogoColor !== vm.logoColor) {
          $timeout(function() {
            vm.logoColor = newLogoColor;
          });
        }
      });          
    }  
  })();
  