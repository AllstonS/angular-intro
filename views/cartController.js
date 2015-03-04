//   (function() {
//     "use strict";
//     angular.module('fishApp')
//     .controller('CartController', function (FishStoreService, $routeParams, $location, $scope) {
//       var cartCtrl = this;
//
//       cartCtrl.fishes = FishStoreService.getFishes();
//     };
//
//     cartCtrl.deleteFish = function() {
//       FishStoreService.deleteFish($routeParams.fishIndex);
//       $location.path('/');
//     }
//
//     cartCtrl.addFish = function (newFish) {
//       FishStoreService.addFish = {}
//     };
//
//   });
// }) ();
