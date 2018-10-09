(function() {
  'use strict';

  angular
    .module('shishi')
    .config(routeConfig);

  function routeConfig($routeProvider, $locationProvider) {    
    $locationProvider.html5Mode(true);

    $routeProvider
      .when('/catering', {
        templateUrl: 'app/catering/catering.html',
        controller: 'CateringController',
        controllerAs: 'cateringCtrl',
        noScroll : true
      })
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'mainCtrl',
        noScroll : true
      })      
      .otherwise({
        redirectTo: '/'
      });
  }

})();
