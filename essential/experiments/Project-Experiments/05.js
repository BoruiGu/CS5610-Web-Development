var app = angular.module("CommuApp", []);

app.controller("CommuCtrl", function ($scope) {
    var player = new Audio();
    player.loop = true;
    player.src = "https://p.scdn.co/mp3-preview/885021ec9b6ac110238a9463bdcc0dc6d4778cec";

    $scope.play = function(){
        player.play();
        localStorage.setItem("musicPlaying", Date.now());
    }

    $scope.pause = function () {
        player.pause();
    }

    window.addEventListener('storage', function () {
        console.log("in event listener");
        player.pause();
    });
});