var app = angular.module("ListManagement", []);
app.controller("ListManagementCtrl", function ($scope) {
    var vns = [
        { title: "0008 The Story", date: "2015 - 02 - 16", rating: 6.28 },
        { title: "Baldr Sky Dive1 “Lost Memory”", date: "	2009-03-27", rating: 8.58 },
        { title: "Tsuki ni Yorisou Otome no Sahou", date: "2012-10-26", rating: 7.69 },
        { title: "V.G. Neo", date: "2003-12-19", rating: 6.20 },
    ];

    $scope.vns = vns;

    var removeItem = function (vn) {
        alert("ALE");
        var index = $scope.vns.indexOf(vn);
        $scope.vns.splice(index, 1);
    };
});