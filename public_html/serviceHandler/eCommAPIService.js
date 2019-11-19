'use strict';
 
angular.module('myApp.eCommAPIService', ['myApp.eCommRemoteController'])
.service('MainService', function (Main) {
      
    this.getPGInfo = function() {
      return Main.getPGInfo();
    }; 
    
    this.getAllCatgoryItems = function() {
      return Main.getAllCatgoryItems();
    }; 
    
    this.addItemToCart = function() {
      return Main.addItemToCart();
    }; 
    
    this.getItemDetails = function() {
      return Main.getItemDetails();
    };  
    
    this.removeItemFromCart = function() {
      return Main.removeItemFromCart();
    }; 
    
     this.getItemsFromCart = function() {
      return Main.getItemsFromCart();
    }; 
    
    this.checkout = function(cartItmes) {
      return Main.checkOut(cartItmes);
    };  
    
    
    
        
});