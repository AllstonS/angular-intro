  (function () {
    "use strict";

  angular.module('fishApp')
  .factory('FishStoreService', function ($http, $rootScope) {

    var url= 'http://tiy-fee-rest.herokuapp.com/collections/fishy';

    var fishes = [
    {
      name: "Angel",
      image: "images/nemo.jpeg",
      description: "Lovely fish of vibrant white and yellow stripes. Also now known as 'Nemo.'",
      price: 4.95
    },
    {
      name: "Shimmery Blue",
      image: "images/shimmerBlue.jpeg",
      description: "A shimmery gold and blue fish that is easy to maintain in any aquarium.",
      price: 6.95
    },
    {
      name: "Pinky",
      image: "images/pink.jpeg",
      description: "The Princess fish. A majestic fish that makes any aquarium pop.",
      price: 3.95
    },
    {
      name: "Black Spotted Sun",
      image: "images/measles.jpeg",
      description: "The brightly colored, silly looking fish is a fun addition to an otherwise calm aquarium.",
      price: 9.95
    },
    {
      name: "Sea Tiger",
      image: "images/stripes.jpeg",
      description: "The lines and colors of this fish are a graceful pleasure to watch as it swims around your aquarium.",
      price: 4.95
    },
    {
      name: "Fire Fish",
      image: "images/flare.jpeg",
      description: "Vavavoom! This firey fish gives flare to any aquarium.",
      price: 8.95
    }
    ];
    //this is empty because the user starts with an empty cart
    var cartFishes = [

    ];



    //admin

    var getFishes = function() {
      return $http.get(url);            //returns products
    };

    var getSingleFish = function (id) {  //was index
        return $http.get(url + '/' + id);
    };

    var addFish = function (fish) {
      item.reviews = [];
      $http.post(url, fish);
      $rootScope.$broadcast('fish:created')
      //fishes.push(fish);
    };

    var deleteFish = function (id)    //was (fish)
      $http.deleteL(url) + '/' + id);
      $rootScope.$broadcast('fish:deleted');
    };

    var editFish = function (fish, id) {    //was (item, index)
    $http.put(url + '/' + id, fish);
    $rootScope.$broadcast('fish:updated');
  };


  //User
    //reviews

    var addReview = function (fish, review) {
      review = {
        body: '',
        author: ''
      }
      fish.reviews.push(review);
      $http.put(url + '/' + item._id, item)
    }
;//    var getFish = function()
//      return fish;
//    }

    // var getFishes = function () {
    //   return fishes;
    // }
    //
    // var addFish = function (fish) {
    //   fishes.push(fish);
    // };
    //
    // var deleteFish = function(fish) {
    //   var idx = fishes.indexOf(fish);
    //     console.log(idx);
    //     fishes.splice (idx, 1);
    // }
    //
    // var editFish = function(fish, idx) {
    //
    //   var idx = fishes.indexOf(fish);
    //   fishes[idx] = fish;
    //
    // }
    //
    // var buyFish = function(fish) {
    //   cartFishes.push(fish);
    //   console.log (cartFishes);
    // };
    //cart

    var cart = [];
    var addToCart = function (item) {
      cart.push(item);
    };

    var getCartFishes = function () {
      return cart;
    };

    //var getSingleCartFish = function (id) {
    //retrun cart [id];
    //};

    var deleteCartFishes = function (fish) {
      var idx = cart.indexOf(fish);
      cart.splice(idx,1);
    };

    var total = function () {
      var total = 0;
      angular.forEach(cart, function(fish) {
        total += fish.quant * fish.price;
      })
      return total;
    };
  }
    return {
      getFishes: getFishes,
      getFish: getSingleFish,
      addFish: addFish,
      deleteFish: deleteFish,
      editFish: editFish,
//      buyFish: buyFish

      addToCart: addToCart,
      getCartFishes: getCartFishes,
      //getCartFish: getSingleCartFish,
      deleteFromCart: deleteCartFishes,
      total: total
    };

  });

}) ();
