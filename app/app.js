'use strict';
// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute','myApp.home','myApp.manager','myApp.version'
  
  ]).
config(['$locationProvider', '$routeProvider','$httpProvider', function($locationProvider, $routeProvider, $httpProvider) {
//  $locationProvider.html5Mode(true);
//  $httpProvider.defaults.withCredentials = true;
  $locationProvider.hashPrefix('!');
  $routeProvider.otherwise({redirectTo: '/home'});
}]);
