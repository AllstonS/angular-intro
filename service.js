(function () {
  "use strict";

  angular.module('storeApp')
  .factory('FishStoreService', function () {
    var fish = [
    {
      name: "Angel",
      image: "images/nemo.jpeg",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      price: 4.95
    },
    {
      name: "Shimmery Blue",
      image: "images/shimmerBlue.jpeg",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      price: 6.95
    },
    {
      name: "Pinky",
      image: "images/pink.jpeg",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      price: 3.95
    },
    {
      name: "Black Spotted Sun",
      image: "images/measles.jpeg",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      price: 9.95
    },
    {
      name: "Sea Tiger",
      image: "images/stripes.jpeg",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      price: 4.95
    },
    {
      name: "Fire Fish",
      image: "images/flare.jpeg",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      price: 8.95
    }
    ];

//    var getFish = function()
//      return fish;
//    }

    var getAllFish = function () {
      return fish;
    }

    var addFish = function (fish) {
      Fish.push(fish);
    }

    var deleteFish = function(fish) {
      var idx = fish.indexOf(fish);
        console.log(idx);
        fish.splice (idx, 1);
    }

    var editFish = function(fish) {

      var idx = fish.indexOf(fish);

    }

    return {
      getFish: getAllFish,
      addNewFish: addFish,
      deleteFish: deleteFish
  //    editFish: editFish
    };



  });

})();
