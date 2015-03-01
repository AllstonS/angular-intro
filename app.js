(function () {
  "use strict";

  angular.module('storeApp', [
  'ngRoute'
  ])
  //configure routes
  .config(function ($routeProvider) {
    $routeProvider

//route for the products (user) page
    .when('/', {
      templateUrl: 'views/products.html',
      controller: 'MainController as mainCtrl'
    })
    //route for the administrative page
    .when('/admin', {
      template: 'views/admin.html',
      controller: 'mainController as mainCtrl'
    })
    // .when('/product', {
    //   templateUrl: 'views/products.html',
    //   controller: 'MainController as mainCtrl'
    //
    // })
    .when('/not-found', {
      templateURL: 'views/notfound.html'
    })
    .otherwise({
      redirectTo: '/not-found'
    });
  });



})();
