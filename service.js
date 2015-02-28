(function () {
  "use strict";
  angular.module('fishApp')
  .factory('FishStoreService', function () {
    var fish = [
    {
      name: "Angel",
      image: "images/nemo.jpeg",
      description: "...",
      pricePerFish: 4.95
    },
    {
      name: "Shimmery Blue",
      image: "images/shimmerBlue.jpeg",
      description: "...",
      pricePerFish: 6.95
    },
    {
      name: "Pinky",
      image: "images/pink.jpeg",
      description: "...",
      pricePerFish: 3.95
    },
    {
      name: "Black Spotted Sun",
      image: "images/measles.jpeg",
      description: "...",
      pricePerFish: 9.95
    },
    {
      name: "Sea Tiger",
      image: "images/stripes.jpeg",
      description: "...",
      pricePerFish: 4.95
    },
    {
      name: "Fire Fish",
      image: "images/flare.jpeg",
      description: "...",
      pricePerFish: 8.95
    }
    ];

    var getAllFish = function () {
      return fish;
    };
    var addFish = function (fish) {
      Fish.push(fish);
    };

    var deleteFish = function(fish) {
      var idx = fish.indexOf(fish);
        console.log(idx);
        fish.splice (idx, 1);

    };

    var editFish = function(fish) {

    };

    return {
      getFish: getAllFish,
      addNewFish: addFish,
      deleteFish: deleteFish
    };



  });

})();
