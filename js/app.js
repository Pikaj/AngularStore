(function() {
  var app = angular.module('masterShop', ['product-directives','category-directives', 'checklist-model']);

  app.controller('ShopController',['$http',function($http){
    var shop = this;
    shop.products = [];
    shop.categories = [];
    $http.get('json/products.json').success(function(data){
      shop.products = data;
    });
    $http.get('json/categories.json').success(function(data){
      shop.categories = data;
    });
  }]);

  app.controller('ProductController', function() {
    this.product = {};

    this.addProduct = function(shop) {
      shop.products.push(this.product);

      this.product = {};
    };
  });
  
  app.controller('CategoryController', function() {
    this.category = {};

    this.addCategory = function(shop) {
      shop.categories.push(this.category);

      this.category = {};
    };
  });
})();