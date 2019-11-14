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
    
    
    
        
}).service('HostelService', function (Hostel) {
    
    this.saveHostel = function(hostelInfo) {
      return Hostel.saveHostel(hostelInfo);
    };
    
    this.getHostelModel = function() {
      return Hostel.getHostelModel();
    };
    
    this.getHostel = function(Id) {
      return Hostel.getHostel(Id);
    };
    
    this.updateHostel = function(hostel) {
      return Hostel.updateHostel(hostel);
    };
    
    this.deleteHostel = function(Id) {
      return Hostel.deleteHostel(Id);
    };
     
}).service('TanantService', function (Tanant) {

    this.saveTanant = function(tanantInfo) {
      return Tanant.saveTanant(tanantInfo);
    };
    
    this.getTanantModel = function() {
      return Tanant.getTanantModel();
    };
    
    this.getTanant = function(Id) {
      return Tanant.getTanant(Id);
    };
    
    this.deleteTanant = function(Id) {
      return Tanant.deleteTanant(Id);
    };
    
     this.saveTanantPayment = function(tanantPayment) {
      return Tanant.saveTanantPayment(tanantPayment);
    };
    
    this.getPaymentHistory  = function(Id) {
      return Tanant.getPaymentHistory(Id);
    };
    
        
}).service('TanantPaymentService', function (TanantPayment) {
     
     
}).service('CategoryService', function (Category) {
     
     
}).service('ReamaindarsService', function (Reamaindars) {
    
       
}).service('SettingsService', function (Settings) {
    
       
}).service('PublicVisibilityService', function (PublicVisibility) {
     
}).service('UtilsService', function (Utils) {
     
    this.getRoomWiseInfo = function() {
      return Utils.getRoomWiseInfo();
    }; 
    
    
});