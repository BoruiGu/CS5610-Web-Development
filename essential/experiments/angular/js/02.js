var app = angular.module("Hello", []);
app.controller("HelloController", function ($scope) {
    var content = [
        { c1: "I", c2: "1", c3: "2", c4: "3" },
        { c1: "II", c2: "4", c3: "5", c4: "6" },
        { c1: "III", c2: "7", c3: "8", c4: "9" },
    ];

    $scope.content = content;
});