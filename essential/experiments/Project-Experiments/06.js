var app = angular.module("SearchApp", []);

app.controller("SearchCtrl", function ($scope, $http) {
    $scope.search = function (query) {
        $scope.ACRes = null;
        search(query, function (res) {
            $scope.res = res;
        });
    };

    $scope.autoComplete = function (query) {
        $scope.ACRes = null;
        search(query, function (res) {
            $scope.ACRes = res;
        });
    };

    function search(query, callback) {
        if (typeof query == 'undefined') {
            // query is undefined, don't send a search query
            console.log("invalid query");
            return;
        }
        if (!query) {
            // query might be: null, undefined, NaN, "", 0, false
            // don't send a search query
            console.log("invalid query");
            return;
        }

        var queryUrl = "https://api.spotify.com/v1/search?q=" + query + "&type=album,artist,track&limit=5";
        $http.get(queryUrl).success(function (res) {
            console.log(res);
            callback(res);
        });
    }
});