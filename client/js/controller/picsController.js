myApp.controller("picsController", function($scope, $routeParams, picFactory){
  picFactory.index(function(data){
    $scope.pics = data;
  })
});
