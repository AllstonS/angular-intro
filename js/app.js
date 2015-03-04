(function () {
  "use strict";

  angular.module('fishApp', [
  'ngRoute'
  ])
  //configure routes
  .config(function ($routeProvider) {
    $routeProvider

  //  route for the products (user) page
     .when('/', {
       templateUrl: 'views/main.html',
       controller: 'MainController as mainCtrl'
    })

    //route for the administrative page
    .when('/admin', {
      templateUrl: 'views/admin/admin.html',
      controller: 'MainController as mainCtrl'
    })

    .when('/cart', {
      templateUrl: 'views/user/cart.html',
      controller: 'MainController as mainCtrl'
    })

    .when('/not-found', {
      templateURL: 'views/user/notfound.html'
    })

    .otherwise({
      redirectTo: '/views/user/not-found'
    });


  });



}) ();
