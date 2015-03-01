var app = angular.module("UserApp", ['ngRoute']);

app.config(['$routeProvider',
  function ($routeProvider) {
      $routeProvider.
        when('/home', {
            templateUrl: 'user/home.html'//,
            //controller: 'PhoneListCtrl'
        }).
        when('/profile/:username', {
            templateUrl: 'user/profile.html',
            controller: 'profileController'
        }).
        otherwise({
            redirectTo: '/home'
        });
  }]);

app.controller("navController", function ($scope, UserService) {
    $scope.login = function () {
        var username = $scope.username;
        var password = $scope.password;
        if (UserService.login(username, password) == "fail") {
            alert("Invalid username or password");
        }
        else {
            $scope.currentUser = UserService.getCurrentUser();
        }
    };

    $scope.logout = function () {
        UserService.logout();
        $scope.currentUser = null;
        $scope.username = null;
        $scope.password = null;
    };
});

app.controller("profileController", function ($scope, $routeParams) {
    $scope.username = $routeParams.username;
});

app.factory("UserService", function () {
    var users = [
        { username: "admin", password: "admin" },
        { username: "user", password: "123" }
    ];
    var currentUser = null;
    var login = function (username, password) {
        for (var i in users) {
            if ((users[i].username == username) && (users[i].password == password)) {
                currentUser = username;
                return "success";
            }            
        }
        return "fail";
    };

    var logout = function () {
        currentUser = null;
    }

    var getCurrentUser = function () {
        return currentUser;
    }

    return {
        login: login,
        logout: logout,
        getCurrentUser: getCurrentUser
    };
});