var tonyApp = angular.module('tonyApp',[]);

// tonyApp.controller('MovieController', ['$scope', function($scope) {
//   $scope.movies = $http({
//         method: 'JSONP', 
//         url: 'http://www.myapifilms.com/imdb/top'
//    });

tonyApp.controller('MoviesCtrl', ['$scope', '$http', function ($scope, $http) { 
  $scope.movies = [];
  $http
    .get("http://www.myapifilms.com/imdb/top")
    .then(function(response){
      $scope.movies = response.data.movies;
    });
}]) 

}]);