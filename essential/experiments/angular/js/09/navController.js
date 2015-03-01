app.controller("navController", function ($scope, UserService, $location) {
    $scope.currentUser = null;
    $scope.login = function () {
        var username = $scope.username;
        var password = $scope.password;
        if (UserService.login(username, password) == "fail") {
            alert("Invalid username or password");
            $scope.currentUser = null;
            $scope.username = null;
            $scope.password = null;
        }
        else {
            $scope.currentUser = UserService.getCurrentUser();
            var profilePath = '/profile/' + $scope.currentUser;
            $location.path(profilePath);
        }
    };

    $scope.logout = function () {
        UserService.logout();
        $scope.currentUser = null;
        $scope.username = null;
        $scope.password = null;
    };
});