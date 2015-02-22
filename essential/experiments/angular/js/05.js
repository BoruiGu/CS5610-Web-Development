var app = angular.module("ListManagement", []);
app.controller("ListManagementCtrl", function ($scope) {
    var vns = [
        { title: "0008 The Story", date: "2015-02-16", rating: 6.28 },
        { title: "Baldr Sky Dive1 “Lost Memory”", date: "	2009-03-27", rating: 8.58 },
        { title: "Tsuki ni Yorisou Otome no Sahou", date: "2012-10-26", rating: 7.69 },
        { title: "V.G. Neo", date: "2003-12-19", rating: 6.20 },
    ];

    var headers = ["title", "date", "rating"];
    var stateHeaders = ["", "", ""];
    var lastChecked = -1;
    var isShiftPressed = false;

    $scope.vns = vns;
    $scope.headers = headers;

    $scope.addItem = function () {
        var newVn = new vn($scope.vn.title, $scope.vn.date, $scope.vn.rating);        
        vns.push(newVn);
        $scope.vn = {};
    };

    $scope.removeItem = function (vn) {
        var index = vns.indexOf(vn);
        vns.splice(index, 1);
    };    

    function startSort(event, ui) {
        ui.item.data("oldIndex", ui.item.index());
    }

    function updateSort(event, ui) {
        var newIndex = ui.item.index();
        var oldIndex = ui.item.data("oldIndex");
        vns.splice(newIndex, 0, vns.splice(oldIndex, 1)[0]);
        $scope.$apply();
    }

    /*This statement must be placed after definition of 
      startSort and updateSort */
    $("tbody").sortable({
        start: startSort,
        update: updateSort
    });

    $scope.sortItem = function (field) {
        var index = headers.indexOf(field);
        var state = stateHeaders[index];
        stateHeaders = ["", "", ""];

        if (state == "asc") state = "desc";
        else state = "asc";

        stateHeaders[index] = state;

        vns.sort(function (a, b) {
            if (field == "date") {
                var d1 = Date.parse(a[field]);
                var d2 = Date.parse(b[field]);
                if (state == "asc")
                    return d1 > d2;
                else return d1 < d2;
            } else {
                if (state == "asc")
                    return a[field] > b[field];
                else return a[field] < b[field];
            }
        });        
    };

    $scope.isAsc = function (index) {
        if (stateHeaders[index] == "asc") return true;
        else return false;
    }

    $scope.isDesc = function (index) {
        return stateHeaders[index] == "desc";
    }

    $scope.hasSelect = function () {
        for (var i in vns) {
            if (vns[i].selected) return true;
        }
        return false;
    }

    $scope.checkRow = function (index) {
        vns[index].selected = !vns[index].selected;
    };

    $scope.onKeyDown = function ($event){
        if (event.shiftKey)
            isShiftPressed = true;
    };

    $scope.onKeyUp = function ($event){
        isShiftPressed = false;
    };

    $scope.itemChecked = function (index) {
        if (isShiftPressed && (lastChecked != -1)) {
            for (var i = lastChecked; i <= index; i++)
                vns[i].selected = true;
        }

        if (vns[index].selected)
            lastChecked = index;
        else lastChecked = -1;
    };

    $scope.removeSelectedItems = function () {
        for (var i = vns.length - 1; i >= 0; i--) {
            if (vns[i].selected) $scope.removeItem(vns[i]);
        }
    }
});

function vn(title, date, rating) {
    this.title = title;
    this.date = date;
    this.rating = rating;
}