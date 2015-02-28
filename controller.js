(function () {
  "use strict";
  angular.module('fishApp')
  .controller('MainController', function (FishStoreService, $scope) {
    var mainCtrl = this;

    mainCtrl.newFish = {};

    mainCtrl.fish = FishStoreService.getFish();

//Add fish product

  mainCtrl.addFish = function(newFish) {
    FishStoreService.addFish(newFish);
    mainCtrl.newFish = {}
  }


    // mainCtrl.addFish = function (newFish) {
    //   if(newProduct === undefined){
    //
    //   }
    //   else{
    //     FishStoreService.addNewFish(newFish);
    //     $scope.newFish = {};
  //  }


    //update fish
    main.Ctrl.editFish = function (editedFish) {
      FishStoreService.editFish(editedFish);
    };
    //delete fish
    main.Ctrl.deleteFish = function(fish) {
      FishStoreService.deleteFish(fish);
    };
  });

})();
