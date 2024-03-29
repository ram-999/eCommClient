'use strict';
var myPgApp = angular.module('myApp', [
    
    'ngRoute',
    'myApp.eCommAPIService',
    'myApp.eCommRemoteController'
])
        .config(['$routeProvider', function ($routeProvider) {

                //HOME           
                $routeProvider.when('/home', {templateUrl: 'home/home.html', controller: 'HomeCtrl'});
                   
                //Settings
                $routeProvider.when('/cart', {templateUrl: 'cart/cart.html', controller: 'CartCtrl'});
                //$routeProvider.when('/settings/notifications', {templateUrl: 'settings/settings-notifications.html', controller: 'SettingsCtrl'});
                 
            }])
        .controller('MainCtrl', ['$scope', '$rootScope', '$window', '$location', 
            function ($scope, $rootScope, $window, $location) {
                $scope.slide = '';
                $rootScope.headerClickPageExists = false;
                $rootScope.months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

                $location.url("/home");
                $rootScope.back = function () {
                    //$scope.slide = 'slide-right';
                    $window.history.back();
                };
                $rootScope.go = function (path) {
                    //$scope.slide = 'slide-left';
                    $location.url(path);
                };
                $rootScope.changeHeadertext = function (text, linkPage) {
                    $rootScope.homeHeaderShow = false;
                    $rootScope.headerText = text;
                    if (linkPage != null) {
                        $rootScope.headerClickPage = linkPage;
                        $rootScope.headerClickPageExists = true;
                    } else {
                        $rootScope.headerClickPageExists = false;
                    }
                };


                $rootScope.initVariables = function () {
                    //$scope.pathObject = PathsFactory.getNavigationPaths(); 
                    $rootScope.homeHeaderShow = true;
                    $rootScope.homeSecondHeaderShow = true;
                    $rootScope.hostels = [];

                    $rootScope.hoselId = 10;

                };
               
                $rootScope.init = $rootScope.initVariables();

            }]);