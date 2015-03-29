var app = angular.module("PlayerApp", []);
app.controller("PlayerCtrl", function ($scope, $interval) {
    var player = new Audio();
    $scope.progress = 0;
    $scope.playerStarted = false;
    $scope.isPlaying = false;
    $scope.isPaused = false;

    $scope.startPlaying = function () {
        $scope.progress = 0;
        player.src = "https://p.scdn.co/mp3-preview/885021ec9b6ac110238a9463bdcc0dc6d4778cec";
        player.addEventListener('loadedmetadata', function () {
            console.log('player loadedmetadata');
            $scope.duration = player.duration * 1000;
            player.play();
            setTimer();
            $scope.playerStarted = true;
            $scope.isPlaying = true;
            $scope.isPaused = false;
        }, false);

        player.addEventListener('ended', function () {
            console.log('track ended');
            stopTimer();
            $scope.playerStarted = false;
            $scope.isPaused = false;
            $scope.isPlaying = false;            
        }, false);
    }

    $scope.pause = function () {
        player.pause();
        stopTimer();
        $scope.isPlaying = false;
        $scope.isPaused = true;
    };

    $scope.resume = function () {
        player.play();
        setTimer();
        $scope.isPlaying = true;
        $scope.isPaused = false;
    }

    var timer = 0;
    function tick() {
        $scope.progress = Math.floor(player.currentTime * 1000);
    }
    function setTimer() {
        stopTimer();
        timer = $interval(tick, 100);
    }
    function stopTimer() {
        $interval.cancel(timer);
    }
});