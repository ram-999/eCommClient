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

        
            
            
            
            
 .factory('Main1',  [
                function ($q, $http) {
                    return {
                       
                        getAllCatgoryItems: function () {
                            alert('reached here');
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
                        }
                    }

                }])
            .factory('Hostel', [
                function ($rootScope, $scope, $http) {
                    return {
                        saveHostel: function (hostelInfo) {
                            console.log(' Current Hostel Info : ' + hostelInfo + ';Rooms:' + hostelInfo.rooms);
                            PGINFO.hostels.push(hostelInfo);
                            
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
                        updateHostel: function (hostelInfo) {
                            console.log('updateHostel: Current Hostel Info : ' + hostelInfo + ';Rooms:' + hostelInfo.rooms);
                            this.deleteHostel(hostelInfo.Id);
                            this.saveHostel(hostelInfo);

                        },
                        getHostelModel: function () {

                            var hostelModel = {
                                Id: '',
                                Name: '',
                                Desc: '',
                                rooms: []
                            };
                            return hostelModel;
                        },
                        getHostel: function (Id) {

                            var hostel = null,
                                    l = PGINFO.hostels.length,
                                    i;
                            for (i = 0; i < l; i = i + 1) {
                                if (parseInt(PGINFO.hostels[i].Id) === parseInt(Id)) {
                                    hostel = PGINFO.hostels[i];
                                    break;
                                }
                            }
                            return hostel;
                        },
                        deleteHostel: function (Id) {
                            var l = PGINFO.hostels.length, i;
                            for (i = 0; i < l; i++) {
                                if (parseInt(PGINFO.hostels[i].Id) === parseInt(Id)) {
                                    console.log(PGINFO.hostels[i] + ' will removed');
                                    PGINFO.hostels.splice(i, 1);
                                    break;
                                }
                            }
                            return;
                        }
                    };

                }])
            .factory('Tanant', [
                function () {
                    return {
                        saveTanant: function (tanantInfo) {
                            PGINFO.tanants.push(tanantInfo);
                        },
                        getTanantModel: function () {

                            var TanantModel = {
                                Id: '',
                                Name: '',
                                Desc: '',

                            };
                            return TanantModel;
                        },
                        getTanant: function (Id) {

                            var tanant = null,
                                    l = PGINFO.tanants.length,
                                    i;
                            for (i = 0; i < l; i = i + 1) {
                                if (parseInt(PGINFO.tanants[i].Id) === parseInt(Id)) {
                                    tanant = PGINFO.tanants[i];
                                    break;
                                }
                            }
                            return tanant;
                        },
                        deleteTanant: function (Id) {
                            var l = PGINFO.tanants.length, i;
                            for (i = 0; i < l; i++) {
                                if (parseInt(PGINFO.tanants[i].Id) === parseInt(Id)) {
                                    console.log(PGINFO.tanants[i] + ' will removed');
                                    PGINFO.tanants.splice(i, 1);
                                    break;
                                }
                            }
                            return;
                        }, 
                        saveTanantPayment: function (tanantPayment) {
                            PGINFO.tanantPayments.push(tanantPayment); 
                            console.log('saveTanantPayment : '+PGINFO.tanantPayments)
                        },
                        getPaymentHistory: function (tanantId){
                            
                             var  paymentHistory = [];
                             for (var i = 0; i < PGINFO.tanantPayments.length; i++) { 
                                 
                                 if(parseInt(PGINFO.tanantPayments[i].Id) === parseInt(tanantId)){
                                     paymentHistory.push(PGINFO.tanantPayments[i]);
                                 } 
                             }
                             return paymentHistory;
                            
                        }
                    }

                }])
            .factory('TanantPayment', [
                function () {
                    return {
                        query: function () {
                            return tanants;
                        },
                        get: function (tanant) {
                            return findById(parseInt(tanant.tanantId));
                        }
                    }

                }])
            .factory('Category', [
                function () {
                    return {
                        query: function () {
                            return tanants;
                        },
                        get: function (tanant) {
                            return findById(parseInt(tanant.tanantId));
                        }
                    }

                }])
            .factory('Reamaindars', [
                function () {
                    return {
                        query: function () {
                            return tanants;
                        },
                        get: function (tanant) {
                            return findById(parseInt(tanant.tanantId));
                        }
                    }

                }])
            .factory('Settings', [
                function () {
                    return {
                        query: function () {
                            return tanants;
                        },
                        get: function (tanant) {
                            return findById(parseInt(tanant.tanantId));
                        }
                    }

                }])
            .factory('PublicVisibility', [
                function () {
                    return {
                        query: function () {
                            return tanants;
                        },
                        get: function (tanant) {
                            return findById(parseInt(tanant.tanantId));
                        }
                    }

                }])
            .factory('Notifcations', [
                function () {
                    return {
                        query: function (tanant) {
                            return findByManager(parseInt(tanant.tanantId));
                        }
                    }

                }])
            .factory('Utils', [
                function () {
                    return {
                        getRoomWiseInfo: function () {
                            var roomWiseInfo = { 'hostelInfo' : []};
                            var roomsInfo = null;

                            for (var i = 0; i < PGINFO.hostels.length; i++) {
                                roomsInfo = [
                                    {'roomType': '1', 'total': 0, 'available': 0, 'roomInfos': []},
                                    {'roomType': '2', 'total': 0, 'available': 0, 'roomInfos': []},
                                    {'roomType': '3', 'total': 0, 'available': 0, 'roomInfos': []},
                                    {'roomType': '4', 'total': 0, 'available': 0, 'roomInfos': []},
                                    {'roomType': 'U', 'total': 0, 'available': 0, 'roomInfos': []}
                                ];

                                for (var j = 0; j < PGINFO.hostels[i].rooms.length; j++) {

                                    switch (parseInt(PGINFO.hostels[i].rooms[j].roomType)) {
                                        case 1:
                                            roomsInfo[0].total++;
                                            roomsInfo[0].roomInfos.push(PGINFO.hostels[i].rooms[j]);
                                            break;
                                        case 2:
                                            roomsInfo[1].total++;
                                            roomsInfo[1].roomInfos.push(PGINFO.hostels[i].rooms[j]);

                                            break;
                                        case 3:
                                            roomsInfo[2].total++;
                                            roomsInfo[2].roomInfos.push(PGINFO.hostels[i].rooms[j]);

                                            break;
                                        case 4:
                                            roomsInfo[3].total++;
                                            roomsInfo[3].roomInfos.push(PGINFO.hostels[i].rooms[j]);

                                            break;

                                        default:
                                            roomsInfo[4].total++;
                                            roomsInfo[4].roomInfos.push(PGINFO.hostels[i].rooms[j]);

                                            break;
                                    }
                                }

                                roomWiseInfo.hostelInfo.push(
                                        {
                                            'hostelName': PGINFO.hostels[i].Name,
                                            'roomsInfo': roomsInfo
                                        });
                            }
                            
                            return roomWiseInfo;
                        }
                    }

                }]);

}());