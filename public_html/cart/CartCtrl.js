/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
'use strict';
myPgApp 
.controller('CartCtrl', ['$scope', '$rootScope', 'Tanant', '$location', '$routeParams', 'MainService', 'HostelService',
    function ($scope, $rootScope, Tanant, $location, $routeParams, MainService, HostelService) {
 
       $rootScope.changeHeadertext('My Cart');
       
       $scope.getTotalPrice = function(){
           var totalPrice=0;
           var i=0;
           for(i=0; i< $rootScope.cartItmes.length; i++){
            totalPrice += $rootScope.cartItmes[i].price;   
           }
           
           $scope.totalPrice = totalPrice;
           
       };
       
       $scope.checkout = function(){
           
           
        var checkoutResponse = MainService.checkout($rootScope.cartItmes); 
        checkoutResponse.then(function(response) {
            $scope.response = response;
            if($scope.response.status == 200){
                //$scope.error = 'Checkout failed. Status code is not success. please verfiy : Status Code: '+response.status+'; Status Message: '+response.statusText;
                $rootScope.cartItmes = [];
                $location.path("/home");
            } 
            //alert($scope.response.data.msg);
            $scope.msg = $scope.response.data.msg;
             
        },
        function(response) {
             //$scope.error = 'Error while checkout, calling : '+response.config.url +' StatusCode:'+response.status + ' Status Msg: '+response.statusText;
            $scope.response = response.data;
            //alert($scope.response.data.msg); 
             $scope.msg = $scope.response.data.msg;
        });
        
        $scope.getTotalPrice();
        
       
           
       };
       
       $scope.removeItemFromTheCart = function(item){
           
            $rootScope.cartItmes.slice(1);
            removeByAttr($rootScope.cartItmes, 'name', item.name); 
            
            $scope.getTotalPrice();
            
       };
       
       var removeByAttr = function(arr, attr, value){
            var i = arr.length;
            while(i--){
               if( arr[i] 
                   && arr[i].hasOwnProperty(attr) 
                   && (arguments.length > 2 && arr[i][attr] === value ) ){ 
                   arr.splice(i,1); 
               }
            }
            return arr;
        }
         
       $scope.init = $scope.getTotalPrice();
         
        
}]);