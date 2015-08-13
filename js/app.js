var app = angular.module('myApp', []);
app.controller('LinkedInController', function($scope, $http) {
    $http.get("http://www.w3schools.com/angular/customers.php")
    .success(function(response) {$scope.names = response.records;});
});
app.controller('MeController', function($scope, $http) {
  $scope.me = {
    firstName: Tony,
    lastName: James
  }
});
