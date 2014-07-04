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
    this.orderProp = 'age';
  }]);

  app.controller('ProductController', function() {
    this.product = {};

    this.addProduct = function(shop) {
      this.product.age = new Date();
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

  app.directive("topPanel", function() {
      return {
        restrict:"E",
        templateUrl: "partials/top-panel.html"
      };
    });
})();