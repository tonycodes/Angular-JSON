var tonyApp = angular.module('tonyApp',[]);

tonyApp.controller('GreetingController', ['$scope', function($scope) {
  $scope.greeting = 'Hola!';
}]);