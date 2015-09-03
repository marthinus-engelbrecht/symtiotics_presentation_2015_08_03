import handleResponse from './handleResponse.js';
import displayDeliveryFailureMessage from './displayDeliveryFailureMessage.js';
import awaitArrival from './awaitArrival.js';
import sendInvite from './sendInvite.js';
import Mediator from  './mediator.js';

var app = angular.module('App', [ 'gridster' ]);

app.module('App', [ 'gridster' ])
    .service('mediator', function() {
        return new Mediator();
    })
    .factory('sendInvite', function(mediator){
        return function() {
            return sendInvite(mediator);
        }
    })
    .controller('mainCtrl', function($scope, mediator, sendInvite) {

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

        function updateUi(people) {
            people.forEach(function(person) {
                $scope.people.push(person);
            });

            $scope.$digest();
        }

        mediator.listen('peopleHaveArrived', function(people) {
            updateUi(people);
        });

        $scope.onClick = function() {

            sendInvite()
                .whenPeopleRespond(handleResponse, awaitArrival)
                .whenPeopleDontGetTheInvite(displayDeliveryFailureMessage);
        }
    });

var $injector = angular.injector();

angular.element(document).ready(function() {
    return angular.bootstrap(document.body, [ 'App' ]);
});

