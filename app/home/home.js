'use strict';
angular.module('myApp.home', ['ngRoute','ui.bootstrap'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl'
  });
  $routeProvider.when('/home/', {
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', ['$scope', '$log','$window', function($scope, $log,$window) {
  $scope.$log = $log;
  $window.onbeforeunload =  $scope.onExit;
  $scope.message = 'Hello World!';
  $scope.myInterval = 6000;
  
    
  $scope.slides = [
    {
     	 image: 'https://securingthehuman.sans.org/images/104707.jpeg',
       link: 'https://www.sans.org/webcasts/104707#__utma=39724961.1666037487.1492188657.1492188657.1492291415.2&__utmb=39724961.20.9.1492291541176&__utmc=39724961&__utmx=-&__utmz=39724961.1492188657.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none)&__utmv=-&__utmk=66416748&__utma=39724961.1666037487.1492188657.1492188657.1492291415.2&__utmb=39724961.21.9.1492291600150&__utmc=39724961&__utmx=-&__utmz=39724961.1492188657.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none)&__utmv=-&__utmk=171489122&__utma=39724961.1666037487.1492188657.1492188657.1492291415.2&__utmb=39724961.22.9.1492291675631&__utmc=39724961&__utmx=-&__utmz=39724961.1492188657.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none)&__utmv=-&__utmk=129333326&__utma=39724961.1666037487.1492188657.1492188657.1492291415.2&__utmb=39724961.23.9.1492292346223&__utmc=39724961&__utmx=-&__utmz=39724961.1492188657.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none)&__utmv=-&__utmk=166673532'
    },
    {
      image: 'http://assets1.ignimgs.com/2017/04/12/rankingffchases-cover-1491957025412_948w.jpg',
      link: 'http://www.ign.com/articles/2017/04/12/the-fast-and-the-furious-the-most-ridiculous-car-chases'
    },
    {
      image: 'http://cdn.movieweb.com/img.news.tops/NEeSTN0cEKdwie_1_b.jpg',
      link: 'http://www.ign.com/articles/2017/04/15/new-star-tours-location-addition-will-take-you-to-crait-from-the-last-jedi?abthid=58f290d298859c9d04000026'

    },
    {
      image: 'http://cdn.movieweb.com/img.news.tops/NEw4XpJOC0TsAy_1_b.jpg',
        link: 'http://www.ign.com/videos/2017/04/14/star-wars-the-last-jedi-teaser-trailer'

    },
  
  ];



}]);




