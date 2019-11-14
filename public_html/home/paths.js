'use strict';

(function () {
    angular.module('myApp.paths', [])
    .factory('PathsFactory', [
        function () {
            return {
                getNavigationPaths: function () {
                    return paths;
                },
                getWrapper: function () {
                    return mainObject;
                }
            };

        }]) ;


    var paths = [
        {"displayName": "Home",
            "icon": "glyphicon glyphicon-home",
            "path": "/home"
        },
        {"displayName": "New Hostel",
            "icon": "glyphicon glyphicon-plus",
            "path": "/hostel"
        },
        {"displayName": "New Tanant",
            "icon": "glyphicon glyphicon-plus",
            "path": "/tanant"
        },
        {"displayName": "Payments",
            "icon": "glyphicon glyphicon-user",
            "path": "/payments"
        },
        {"displayName": "Maintainance",
            "icon": "glyphicon glyphicon-heart",
            "path": "/maintainance"
        },
        {"displayName": "AboutUs",
            "icon": "glyphicon glyphicon-film",
            "path": "/aboutUs"
        },
        {"displayName": "ContactUs",
            "icon": "glyphicon glyphicon-ok",
            "path": "/contactUs"
        },
        {"displayName": "Settings",
            "icon": "glyphicon glyphicon-cog",
            "path": "/settings"
        },
        {"displayName": "Logout",
            "icon": "glyphicon glyphicon-off",
            "path": "/logout"
        }

    ];

    var mainObject = {

        "hostels": [
            {
                "hostelName": "ANJI HOSTEL1", "description": "30", "rooms": [{"roomName": "Ford", "Types": ["1", "2", "3"], "TanentInfo": ["1", "2"]}]
            },
            {
                "hostelName": "ANJI HOSTEL2", "description": "30", "rooms": [{"roomName": "Ford", "Types": ["1", "2", "3"], "TanentInfo": ["1", "2"]}]
            },
            {
                "hostelName": "ANJI HOSTEL3", "description": "30", "rooms": [{"roomName": "Ford", "Types": ["1", "2", "3"], "TanentInfo": ["1", "2"]}]
            },
            {
                "hostelName": "ANJI HOSTEL4", "description": "30", "rooms": [{"roomName": "Ford", "Types": ["1", "2", "3"], "TanentInfo": ["1", "2"]}]
            },
            {
                "hostelName": "ANJI HOSTEL5", "description": "30", "rooms": [{"roomName": "Ford", "Types": ["1", "2", "3"], "TanentInfo": ["1", "2"]}]
            }
        ],
        "tanants": [
            {
                "tanantName": "John",
                "history": "30",
                "intersts": [
                    {
                        "roomName": "Ford",
                        "Types": ["1", "2", "3"],
                        "TanentInfo": ["1", "2"]
                    }
                ]
            }
        ]

    };

}());