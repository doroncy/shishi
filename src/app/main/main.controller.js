(function() {
  'use strict';

  angular
    .module('shishi')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout) {
    var vm = this;

    vm.sliderImages = [
      {path:'assets/images/gallary/gallery1.jpg', title: 'Shishi 1'},
      {path:'assets/images/gallary/gallery1.jpg', title: 'Shishi 2'}
    ];
  }
})();
