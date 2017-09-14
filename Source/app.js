
var webApp = angular.module('webApp', ['ngRoute']);

webApp.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: 'login.html',
            controller: 'loginCtrl'
        })
        .when("/sectionA", {
            templateUrl: 'login.html',
            controller: 'loginCtrl'
        })
        .when("/sectionB", {
            templateUrl: 'login.html',
            controller: 'loginCtrl'
        })
        .when("/Home", {
            templateUrl: 'home.html',
            controller: 'homeCtrl'
        });

});

webApp.controller('loginCtrl', function ($scope) {
    $scope.saveCredentials = function (emailID, password) {

        if (emailID != null && password != null) {
            localStorage.setItem("emaiId", emailID);
            localStorage.setItem("password", password);
            window.location.href = "home.html";
        }
    }

});



