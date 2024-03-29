(function(){
    var app = angular.module('product-directives', []);

    app.directive("productAddForm", function() {
      return {
        restrict: 'E',
        templateUrl: "partials/product-add-form.html"
      };
    });

    app.directive("productGallery", function() {
      return {
        restrict: "E",
        templateUrl: "partials/product-gallery.html",
        controller: function() {
          this.current = 0;
          this.setCurrent = function(imageNumber){
            this.current = imageNumber || 0;
          };
        },
        controllerAs: "gallery"
      };
    });

    app.directive("productTabs", function() {
      return {
        restrict: "E",
        templateUrl: "partials/product-tabs.html",
        controller: function() {
          this.tab = 1;

          this.isSet = function(checkTab) {
            return this.tab === checkTab;
          };

          this.setTab = function(activeTab) {
            this.tab = activeTab;
          };
        },
        controllerAs: "tab"
      };
    });

    app.directive("productDescription", function() {
      return {
        restrict: 'E',
        templateUrl: "partials/product-description.html"
      };
    });

    app.directive("productCategories", function() {
      return {
        restrict:"A",
        templateUrl: "partials/product-categories.html"
      };
    });

    app.directive("productFormNamePrice", function() {
      return {
        restrict:"E",
        templateUrl: "partials/product-form-name-price.html"
      };
    });

    app.directive("productFormImages", function() {
      return {
        restrict:"E",
        templateUrl: "partials/product-form-images.html"
      };
    });

    app.directive("productList", function() {
      return {
        restrict:"E",
        templateUrl: "partials/product-list.html"
      };
    });

    app.directive("productSearchSort", function() {
      return {
        restrict:"E",
        templateUrl: "partials/product-search-sort.html"
      };
    });

    app.directive("productOptions", function() {
      return {
        restrict:"E",
        templateUrl: "partials/product-options.html"
      };
    });

  })();
