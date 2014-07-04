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
      };s
    });

    app.directive("productCategories", function() {
      return {
        restrict:"A",
        templateUrl: "partials/product-categories.html"
      };
    });

    app.directive("productNamePrice", function() {
      return {
        restrict:"E",
        templateUrl: "partials/product-name-price.html"
      };
    });

  })();
