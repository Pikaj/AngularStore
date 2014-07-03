(function() {
  var app = angular.module('masterShop', ['shop-directives']);

  app.controller('ShopController',['$http',function($http){
    var shop = this;
    shop.products = [];
    $http.get('json/products.json').success(function(data){
      shop.products = data;
    });
  }]);

  app.controller('ProductController', function() {
    this.product = {};

    this.addProduct = function(shop) {
      shop.products.push(this.product);

      this.product = {};
    };
  });
 
})();