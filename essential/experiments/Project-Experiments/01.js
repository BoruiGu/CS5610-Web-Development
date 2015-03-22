var app = angular.module("SearchApp", []);

app.controller("SearchCtrl", function ($scope, $http) {
    $scope.search = function (query) {
        var queryUrl = "https://api.spotify.com/v1/search?q="+query+"&type=album,artist,track&limit=5";
        $http.get(queryUrl).success(function (res) {
            console.log(res);
            $scope.res = res;
        });
    };
});