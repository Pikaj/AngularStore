(function() {
  var app = angular.module('masterShop', 
    ['product-directives','category-directives','checklist-model','xeditable']);

  app.run(function(editableOptions) {
    editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
  });

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
    this.orderProp = '-age';
  }]);

  app.controller('ProductController', function() {
    this.product = {};
    this.edit = 1;
    this.category = '';

    this.isSet = function(checkEdit) {
      return this.edit === checkEdit;
    };

    this.setEdit = function(activeEdit) {
      this.edit = activeEdit;
    };

    this.addProduct = function(shop) {
      this.product.age = new Date();
      shop.products.push(this.product);

      this.product = {};
    };

    this.change = function(item)
    {
      this.product = item;
    };

    this.update = function(index, shop) {
      shop.products[index] = this.product;

      this.product = {};
    };

    this.addCategory = function() {
      this.product.categories.push(this.category);
    }

    this.remove = function(index, shop) {
      shop.products.splice(index, 1); 
    }
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