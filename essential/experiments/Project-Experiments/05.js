var app = angular.module("CommuApp", []);
var appId = String(Math.random());
console.log(appId);
app.controller("CommuCtrl", function ($scope) {
    var player = new Audio();
    player.loop = true;
    player.src = "https://p.scdn.co/mp3-preview/885021ec9b6ac110238a9463bdcc0dc6d4778cec";

    $scope.play = function(){
        player.play();
        localStorage.setItem("playAppId", appId);
    }

    $scope.pause = function () {
        player.pause();
    }

    window.addEventListener('storage', function (e) {
        console.log("in event listener");
        console.log(e);
        // In IE, chances are we will get oldValue from getItem. 
        // So we get newValue from event object instead.
        // There's also a bug in IE that the event fires in the
        // same tab that updated localStorage. We're forced to
        // use some method to check if this is the tab that
        // caused the event.
        //var playAppId = localStorage.getItem("playAppId");
        var playAppId = e.newValue;
        console.log(playAppId, ' ', appId);
        if (playAppId != appId) {
            player.pause();
        }
    }, false);
});