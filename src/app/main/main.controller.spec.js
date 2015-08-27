(function() {
  'use strict';

  describe('controllers', function(){

    beforeEach(module('shishi'));

    it('should define more than 5 awesome things', inject(function($controller) {
      var vm = $controller('MainController');

      expect(angular.isArray(vm.sliderImages)).toBeTruthy();
      expect(vm.sliderImages.length > 5).toBeTruthy();
    }));
  });
})();
