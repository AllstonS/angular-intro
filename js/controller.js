(function () {
  "use strict";

  angular.module('fishApp')

  .controller('MainController', function (FishStoreService, $scope, $routeParams, $location) {
    var mainCtrl = this;    //the scope of our controller is 'this'

    mainCtrl.fishes = FishStoreService.getFishes(); //getting data from product array

  //  mainCtrl.singleFish = FishStoreService.getFish($routeParams.fishIndex);


//     Add fish product

   mainCtrl.addFish = function(newFish) {
     FishStoreService.addFish(newFish);
     $scope.newFish = {};
     $location.path('/admin');
   };

   //delete fish
   mainCtrl.deleteFish = function(fish) {
     FishStoreService.deleteFish(fish);
  };

  //edit fish
    mainCtrl.editFish = function (fish) {
      FishStoreService.editFish(Fish);
      $location.path('/admin');
  };
//Shopping cart:

   mainCtrl.addCartFish = function (newCartFish) {
     FishStoreService.addCartFish(newCartFish);
     $scope.newCartFish = {};
   };

   mainCtrl.removeCartFish = function (cartFish) {
     FishStoreService.removeFish(cartFish);
     $scope.removeCartFish = {};
   };


    //Shopping Cart

  //  mainCtrl.cartFishes = FishStoreService.getCartFishes();
  //  mainCtrl.cartFish = FishStoreService.getCartFish($routeParams.fishIndex);

    mainCtrl.addToCart = function (fish) {
      FishStoreService.addToCart(fish);
      $location.path('/cart');
    };

    mainCtrl.deleteFromCart = function (fish) {
      FishStoreService.deleteFromCart(fish);
  };

//     mainCtrl.total = function () {
//       var total = 0;
// //      angular.forEach(mainCtrl)
//     }
//  };



  });

}) ();

  // .controller('CartController', function(FishStoreService, $scope) {
  //
  //   var cartController = this //the scope of our car controller is 'this'
  //
  //   cartCtrl.fishes = FishStoreService.getFishes();
  // })
