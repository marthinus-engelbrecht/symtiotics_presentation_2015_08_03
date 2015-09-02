import handleResponse from './handleResponse.js';
import displayDeliveryFailureMessage from './displayDeliveryFailureMessage.js';
import awaitArrival from './awaitArrival.js';
import sendInvite from './sendInvite.js';
import Mediator from  './mediator.js';

angular.module('App', [ 'gridster' ]).controller('mainCtrl', function($scope, $http) {

    var appMediator = new Mediator();

    $scope.people = [
        {
            size: { x: 1, y: 1 },
            position: [ 0, 0 ],
            name: "Douglas Crockford",
            style: {
                tile: {
                    "font-weight": "bold",
                    color: "white",
                    "background-color": "Black",
                    "text-align": "center"
                },
                image: {
                    "max-height": "85%",
                    "max-width": "100%"
                }
            },
            imageSrc: "images/Crockford_Douglas.png"
        },
        {
            size: { x: 1, y: 1 },
            position: [ 0, 2 ],
            name: "Brendan Eich",
            style: {
                tile: {
                    "font-weight": "bold",
                    color: "white",
                    "background-color": "Black",
                    "text-align": "center"
                },
                image: {
                    "max-height": "85%",
                    "max-width": "100%"
                }
            },
            imageSrc: "images/Brendan_Eich.jpg"
        }
    ];

    appMediator.listen('peopleHaveArrived', function(people){
        people.forEach(function(person){
            $scope.people.push(person);
        });

        $scope.$digest();
    });

    $scope.onClick = function() {

        sendInvite(appMediator)
            .whenPeopleRespond(handleResponse, awaitArrival)
            .whenPeopleDontGetTheInvite(displayDeliveryFailureMessage);
    }
});

angular.element(document).ready(function() {
    return angular.bootstrap(document.body, [ 'App' ]);
});

