/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
'use strict';

(function () {

    var nodeServerResource = 'http://localhost:3000/v1'; 

    angular.module('myApp.eCommRemoteController', [])
    
    .factory('Main',   function($q, $http){
    return {
        
        getAllCatgoryItems: function () { 
            var def = $q.defer(); 
            $http({
                method : 'GET',
                url : nodeServerResource+'/categories-items'
              }).then(function  (response) {
                def.resolve(response); 
              }, function (response) {
                def.reject(response);
              });
            return def.promise;
        },
        addItemToCart: function () { 
            var def = $q.defer(); 
            $http({
                method : 'POST',
                url : nodeServerResource+'/cart'
              }).then(function  (response) {
                def.resolve(response); 
              }, function (response) {
                def.reject(response);
              });
            return def.promise;
        },
        getItemDetails: function (itemName) { 
            var def = $q.defer(); 
            $http({
                method : 'GET',
                url : nodeServerResource+'/categories-items'+itemName
              }).then(function  (response) {
                def.resolve(response); 
              }, function (response) {
                def.reject(response);
              });
            return def.promise;
        },
        getItemsFromCart: function (itemName) { 
            var def = $q.defer(); 
            $http({
                method : 'GET',
                url : nodeServerResource+'/cart'
              }).then(function  (response) {
                def.resolve(response); 
              }, function (response) {
                def.reject(response);
              });
            return def.promise;
        },
         removeItemFromCart: function (itemName) { 
            var def = $q.defer(); 
            $http({
                method : 'DELETE',
                url : nodeServerResource+'/cart'
              }).then(function  (response) {
                def.resolve(response); 
              }, function (response) {
                def.reject(response);
              });
            return def.promise;
        },
        checkOut: function (cartItmes) { 
            var def = $q.defer(); 
            $http({
                method : 'POST',
                url : nodeServerResource+'/checkout',
                data : cartItmes,
                body : cartItmes
              }).then(function  (response) {
                def.resolve(response); 
              }, function (response) {
                def.reject(response);
              });
            return def.promise;
        }
        
    }}) 



}());