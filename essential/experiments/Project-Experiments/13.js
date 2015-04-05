var app = angular.module("InsertApp", []);
app.controller("InsertCtrl", function ($scope, $http) {
    $scope.student = {
        name: "Aoko",
        major: "MH"
    };
    $scope.addStudent = function () {
        var student = $scope.student;
        $http.get('http://experiments-borui.rhcloud.com/api/addstudent?name='+student.name+'&major='+student.major);
    }
});