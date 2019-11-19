'use strict';
//angular.module('myApp.home', ['ngRoute',  'myApp.paths'])
myPgApp
        .controller('HomeCtrl', ['$rootScope', '$scope', '$location', '$http', 'MainService',

            function ($rootScope, $scope, $location, $http, MainService) {

                $rootScope.cartItmes = [];
                
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
        
