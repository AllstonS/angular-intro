  (function() {
    "use strict";
    angular.module('fishApp')
    .controller('CartController', function (FishStoreService, $routeParams, $location, $scope) {
      var cartCtrl = this;

      cartCtrl.fishes = FishStoreService.getFishes();
     };

//  mainCtrl.cartFishes = FishStoreService.getCartFishes();
//  mainCtrl.cartFish = FishStoreService.getCartFish($routeParams.fishIndex);

  mainCtrl.addToCart = function (fish) {
    FishStoreService.addToCart(fish);
    $location.path('/cart');
  };

  mainCtrl.buyFish = function (fish) {
    console.log("Button works!");
    FishStoreService.buyFish(fish);
    $location.path('/cart');
  };

  mainCtrl.deleteFromCart = function (fish) {
    FishStoreService.deleteFromCart(fish);
  };

    mainCtrl.total = function () {
      var total = 0;
//      angular.forEach(mainCtrl)
    };
    
  });

}) ();
