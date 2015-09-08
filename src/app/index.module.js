(function() {
  'use strict';

  angular
    .module('shishi', ['ngTouch', 'ngRoute', 'uiGmapgoogle-maps', 'smoothScroll'])
    .config(config);

  /** @ngInject */
  function config($logProvider, uiGmapGoogleMapApiProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    //Init Google Maps
    uiGmapGoogleMapApiProvider.configure({
      israel: true
    });
  }

})();
