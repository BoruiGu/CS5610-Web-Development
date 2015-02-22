var app = angular.module("RoutingHello", ['ngRoute']);

app.config(['$routeProvider',
  function ($routeProvider) {
      $routeProvider.
        when('/home', {
            templateUrl: 'partials/hello-home.html'//,
            //controller: 'PhoneListCtrl'
        }).
        when('/bar/', {
            templateUrl: 'partials/hello-bar.html'//,
            //controller: 'PhoneDetailCtrl'
        }).
        otherwise({
            redirectTo: '/home'
        });
  }]);