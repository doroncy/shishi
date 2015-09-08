(function() {
  'use strict';

  angular
    .module('shishi')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, $location, MenuService) {
    var vm = this;

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
    },6000);

    vm.getColorIcon = function(iconPrefix) {
      return iconPrefix + '-' + vm.logoColor;
    };

    vm.closeMobileTopBar = function() {
      $timeout(function() {
        vm.showTopBarSection = false;
      });
    };

    // Slider Gallery
    vm.sliderImages = ['gallery-1', 'gallery-2', 'gallery-3', 'gallery-4', 'gallery-5'];

    // About Us
    var aboutSection = $(".about-section");
    var whatisSection = $(".whatis-section");
    var menuSection = $(".menu-section");

    $(window).scroll(function() {
      var aboutSectionOffset = aboutSection.offset().top - $(window).scrollTop();
      var whatisSectionOffset = whatisSection.offset().top - $(window).scrollTop();
      var menuSectionOffset = menuSection.offset().top - $(window).scrollTop();

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

    // Map Section
    vm.map = {
      center: { latitude: 32.0753662, longitude: 34.7816258 },
      zoom: 17,
      options: {scrollwheel:false,draggable: false},
      markerOptions: {
        icon: 'http://' + $location.host() + ':' + $location.port() + '/app/assets/images/shishi-face.png'
      }
    };
  }


})();
