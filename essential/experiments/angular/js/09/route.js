var app = angular.module("UserApp", ['ngRoute']);

app.config(['$routeProvider',
  function ($routeProvider) {
      $routeProvider.
        when('/home', {
            templateUrl: 'user/home-seperate-files.html'
        }).
        when('/profile/:username', {
            templateUrl: 'user/profile.html',
            controller: 'profileController'
        }).
        otherwise({
            redirectTo: '/home'
        });
  }]);