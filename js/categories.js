(function(){
  var app = angular.module('category-directives', []);

  app.directive("categoryCheckboxes", function() {
    return {
      restrict:"E",
      templateUrl: "partials/category-checkboxes.html"
    };
  });

  app.directive("categoryAddForm", function() {
    return {
      restrict:"E",
      templateUrl: "partials/category-add-form.html"
    };
  });
})();