System.register(['./handleResponse.js', './displayDeliveryFailureMessage.js', './awaitArrival.js', './sendInvite.js', './mediator.js'], function (_export) {
    'use strict';

    var handleResponse, displayDeliveryFailureMessage, awaitArrival, sendInvite, Mediator;
    return {
        setters: [function (_handleResponseJs) {
            handleResponse = _handleResponseJs['default'];
        }, function (_displayDeliveryFailureMessageJs) {
            displayDeliveryFailureMessage = _displayDeliveryFailureMessageJs['default'];
        }, function (_awaitArrivalJs) {
            awaitArrival = _awaitArrivalJs['default'];
        }, function (_sendInviteJs) {
            sendInvite = _sendInviteJs['default'];
        }, function (_mediatorJs) {
            Mediator = _mediatorJs['default'];
        }],
        execute: function () {

            angular.module('App', ['gridster']).controller('mainCtrl', function ($scope, $http) {

                var appMediator = new Mediator();

                $scope.people = [{
                    size: { x: 1, y: 1 },
                    position: [0, 0],
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
                }, {
                    size: { x: 1, y: 1 },
                    position: [0, 2],
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
                }];

                appMediator.listen('peopleHaveArrived', function (people) {
                    people.forEach(function (person) {
                        $scope.people.push(person);
                    });

                    $scope.$digest();
                });

                $scope.onClick = function () {

                    sendInvite(appMediator).whenPeopleRespond(handleResponse, awaitArrival).whenPeopleDontGetTheInvite(displayDeliveryFailureMessage);
                };
            });

            angular.element(document).ready(function () {
                return angular.bootstrap(document.body, ['App']);
            });
        }
    };
});