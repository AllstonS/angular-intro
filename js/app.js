(function () {
  "use strict";

  angular.module('fishApp', [
  'ngRoute'
  ])
  //configure routes
  .config(function ($routeProvider) {
    $routeProvider

  //  route for the introduction page
     .when('/', {
       templateUrl: 'views/main.html',
       controller: 'MainController as mainCtrl'
    })

    //Routes for the administrative pages
    .when('/admin', {
      templateUrl: 'views/admin/viewItems.html',
      controller: 'MainController as mainCtrl'
    })

    .when('/admin/addNewItem',{
      templateUrl: 'views/admin/addNewItem.html',
      controller: 'MainController as mainCtrl'
    })

    .when('/admin/editItem/:itemIndex', {
      templateUrl: 'views/admin/editItem.html',
      controller: 'MainController as mainCtrl'
    })

    //Routes for the user pages

    .when('/user', {
      templateUrl: 'views/user/productPage.html',
      controller: 'MainController as mainCtrl'
    })

    .when('/user/detailView/:itemIndex', {
      templateUrl: 'views/user/detailView.html',
      controlller: 'MainController as mainCtrl'
    })

    //Route for cart
    .when('/cart', {
      templateUrl: 'views/cart/cart.html',
      controller: 'CartController as cartCtrl'
    })

    .when('/not-found', {
      templateURL: 'views/user/notfound.html'
    })

    .otherwise({
      redirectTo: '/views/user/not-found'
    });


  });



}) ();
