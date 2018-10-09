(function() {
  'use strict';

  angular
    .module('shishi')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($rootScope, $timeout, $location, $window, $anchorScroll, MenuService) {
    var vm = this;

    $anchorScroll('home');
    vm.sections = [
      {id: 'about-section', name: 'אודות'},
      {id: 'whatis-section', name: 'מה זה שישי'},
      {id: 'menu-section', name: 'תפריט'},
      {id: 'map-section', name: 'צור קשר'}
    ];
    vm.logoColor = 'white';
    vm.menu = {
      mainItems: MenuService.mainItems,
      dessertsItems: MenuService.dessertsItems
    };
    vm.showTaviliAlert = true;

    $timeout(function() {
      vm.showTaviliAlert = false;
    }, 6100);

    vm.getColorIcon = function(iconPrefix) {
      return iconPrefix + '-' + vm.logoColor;
    };

    vm.closeMobileTopBar = function() {
      $timeout(function() {
        vm.showTopBarSection = false;
      });
    };

    // Slider Gallery
    vm.sliderImages = ['gallery-1', 'gallery-9', 'gallery-2', 'gallery-3', 'gallery-4', 'gallery-5', 'gallery-6', 'gallery-7', 'gallery-8'];

    // About Us
    var aboutSection = angular.element(".about-section");
    var whatisSection = angular.element(".whatis-section");
    var menuSection = angular.element(".menu-section");
    
    $window.jQuery($window).scroll(function() {
      var aboutSectionOffset = aboutSection.offset().top - angular.element($window).scrollTop();
      var whatisSectionOffset = whatisSection.offset().top - angular.element($window).scrollTop();
      var menuSectionOffset = menuSection.offset().top - angular.element($window).scrollTop();

      var newLogoColor = 'white';
      if (aboutSectionOffset < 160) {
        newLogoColor = 'red';
      }
      if (whatisSectionOffset < 160) {
        newLogoColor = 'white';
      }
      if (menuSectionOffset < 160) {
        newLogoColor = 'red';
      }

      if (newLogoColor !== vm.logoColor) {
        $timeout(function() {
          vm.logoColor = newLogoColor;
        });
      }
    });

    // Menu Section
    vm.getMenuItemIcon = function(menuItem) {
      return "icon-" + menuItem.type;
    };    
  }


})();
