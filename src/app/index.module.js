(function() {
  'use strict';

  angular
    .module('shishi', ['ngTouch', 'ngRoute', 'ngMap', 'smoothScroll'])
    .config(config);

  /** @ngInject */
  function config($logProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    // Enable log
    $logProvider.debugEnabled(false);

    //Init Google Maps
    // uiGmapGoogleMapApiProvider.configure({
    //   israel: true
    // });
  }


})();
