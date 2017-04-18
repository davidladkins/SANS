'use strict';
angular.module('myApp.manager', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/manager', {
    templateUrl: 'manager/manager.html',
    controller: 'ManagerCtrl'
  });
}])
.controller('ManagerCtrl', ['$scope','$filter','$log','$window','$http', function($scope,$filter, $log,$window,$http) {
  $scope.$log = $log;
  $scope.message="hi";
  $scope.sortType     = 'name'; 
  $scope.sortReverse  = false; 
    
  $scope.movies = [
      {id: 1, title: 'Star Wars 1', format: 'VHS', length: 'x hr yy m', releaseYear: '1801', rating:1},
      {id: 2, title: 'Star Wars 2', format: 'DVD', length: 'x hr yy m', releaseYear: '2017', rating:2},
      {id: 3, title: 'Star Wars 3', format: 'DVD', length: 'x hr yy m', releaseYear: '2199', rating:5}
    ]; 

    $scope.ratings	 = [
      {value: 1, text: 'rating1'},
      {value: 2, text: 'rating2'},
      {value: 3, text: 'rating3'},
      {value: 4, text: 'rating4'}
    ]; 
    
    $scope.formats = [
      {value: 'VHS', text: 'VHS'},
      {value: 'DVD', text: 'DVD'},
      {value: 'BLUE RAY', text: 'BLUE RAY'} 
    ]; 

    $scope.showFormat = function(movie) {
      var selected = [];
      if(movie.format) {
        selected = $filter('filter')($scope.formats, {value: movie.format});
      }
      return selected.length ? selected[0].text : 'Not Set';
    };

    $scope.checkTitle = function(data, id) {
      if (data.length > 50) {
        return "Title is limited to 50 characters!";
      }
    };
    $scope.checkLength = function(data, id) {
        if (data.length <  50) {
          return "Title is limited to 50 characters!";
        }
    };
    $scope.checkReleaseYear = function(data, id) {
        if (data < 1800 || data >= 2200) {
          return "Release Year must be between 1800 and 2200";
        }
    };


    $scope.saveMovie = function(data, id) {
      //$scope.movies not updated yet
      angular.extend(data, {id: id});
      return $http.post('/saveMovie', data);
    };

    // remove user
    $scope.removeMovie = function(index) {
      $scope.movies.splice(index, 1);
    };

    // add user
    $scope.addMovie = function() {
      $scope.inserted = {
        id: $scope.movies.length+1,
        name: '',
        status: null,
        group: null 
      };
      $scope.movies.push($scope.inserted);
    };
  
}]);