(function () {
  "use strict";

  angular.module('fishApp', [
  'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainController as mainCtrl'
    })
    .when('/admin', {
      template: 'views/admin.html',
      controller: 'MainController as mainCtrl'
    })
    .when('/product', {
      templateUrl: 'views/products.html'
    })
    .when('/not found', {
      templateURL: 'views/notfound.html'
    })
    .otherwise({
      redirectTo: '/not-found'
    });
  });



})();
