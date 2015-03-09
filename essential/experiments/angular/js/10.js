var app = angular.module('hoverApp', []);

app.controller('hoverController', function ($scope) {
    var tableContent = [
        { a: 1, b: 2, c: 3 },
        { a: 4, b: 5, c: 6 },
        { a: 7, b: 8, c: 9 }
    ];

    $scope.tableContent = tableContent;

    $scope.hover = function (content, event) {
        console.log(event);
        if (typeof content.showBtn == 'undefined')
            content.showBtn = false;
        content.showBtn = !content.showBtn;
    };
});