'use strict';
//angular.module('myApp.home', ['ngRoute',  'myApp.paths'])
myPgApp
        .controller('HomeCtrl', ['$rootScope', '$scope', '$location', '$http', 'PathsFactory','MainService',

            function ($rootScope, $scope, $location, $http, PathsFactory, MainService) {

                //$rootScope.allitems = MainService.getPGInfo().allitems;
                
                
                
                $rootScope.cartItmes = [];
                
                $rootScope.initVariables = function () {
                    $scope.pathObject = PathsFactory.getNavigationPaths();
                    //console.log('ss'+PathsFactory.getNavigationPaths()) ;
                    $rootScope.mainObject = $rootScope.mainObject;//{firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue"};
                    return null;
                };
                
                $scope.listAllItems = function(){
                    
                    var allitems = MainService.getAllCatgoryItems(); 
                    allitems.then(function(response) {
                        if(response.status != 200){
                            $scope.error = 'Status code is not success. please verfiy : Status Code: '+response.status+'; Status Message: '+response.statusText;
                        } 
                        $rootScope.allitems = response.data;
                    },
                    function(response) {
                         $scope.err
                         or = 'Error while calling : '+response.config.url +' StatusCode:'+response.status + ' Status Msg: '+response.statusText;
                     });
                    
                    
                }
 
                
                $scope.addTocart = function(item){
                    
                    $rootScope.cartItmes.push(item);
                    //alert('Item Added to cart successfully : '+item.name);
                    
                }
               $rootScope.allitems = $scope.listAllItems();
               $rootScope.init = $rootScope.initVariables();
            }])
        .controller('LoginCtrl', ['$rootScope', '$scope', '$location', '$http', 'PathsFactory',

            function ($rootScope, $scope, $location, $http, PathsFactory) {

                $rootScope.changeHeadertext('Login');
                $rootScope.loginSuccess = false;

                $rootScope.login = function () {
                    
                    if($scope.userName === 'Admin' && $scope.paswd === 'Admin'){
                           $rootScope.loginSuccess = true;
                           $location.url("/home");
                    }else{
                        $scope.message = lang.loginFailureMessage;
                    }
                    
                } 

                
            }])
        .controller('HomeCtrl2', ['$rootScope', '$scope', '$location', '$http', 'PathsFactory',
            function ($rootScope, $scope, $location, $http, PathsFactory) {
                $rootScope.changeHeadertext('PG App - Home');

            }]);
;
