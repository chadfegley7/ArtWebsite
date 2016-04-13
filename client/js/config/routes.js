var myApp = angular.module("myApp", ['ngRoute']);

myApp.config(function($routeProvider, $locationProvider){
  $routeProvider
  .when("/", {
    templateUrl: "./../static/partials/homepage.html"
  })

  .when("/artwork", {
    templateUrl: "./../static/partials/artwork.html",
  })
  .otherwise({
    redirectTo: "/"
  });

})
