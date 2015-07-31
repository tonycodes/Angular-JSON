var tonyApp = angular.module('tonyApp',[]);

tonyApp.controller('MovieController', ['$scope', function($scope) {
  $scope.movies = $http({
        method: 'JSONP', 
        url: 'http://www.myapifilms.com/imdb/top'
        console.log($scope.movies);
   });
}]);