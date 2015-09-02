System.register([], function (_export10) {
    'use strict';

    return {
        setters: [],
        execute: function () {
            System.register([], function (_export9) {
                'use strict';

                return {
                    setters: [],
                    execute: function execute() {
                        System.register([], function (_export8) {
                            'use strict';

                            return {
                                setters: [],
                                execute: function execute() {
                                    System.register([], function (_export7) {
                                        'use strict';

                                        return {
                                            setters: [],
                                            execute: function execute() {
                                                System.register([], function (_export6) {
                                                    'use strict';

                                                    return {
                                                        setters: [],
                                                        execute: function execute() {
                                                            System.register([], function (_export5) {
                                                                'use strict';

                                                                return {
                                                                    setters: [],
                                                                    execute: function execute() {
                                                                        System.register([], function (_export4) {
                                                                            'use strict';

                                                                            return {
                                                                                setters: [],
                                                                                execute: function execute() {
                                                                                    System.register([], function (_export3) {
                                                                                        'use strict';

                                                                                        return {
                                                                                            setters: [],
                                                                                            execute: function execute() {
                                                                                                System.register([], function (_export2) {
                                                                                                    'use strict';

                                                                                                    return {
                                                                                                        setters: [],
                                                                                                        execute: function execute() {
                                                                                                            System.register(['./handleResponse.js', './displayDeliveryFailureMessage.js', './awaitArrival.js'], function (_export) {
                                                                                                                'use strict';

                                                                                                                var handleResponse, displayDeliveryFailureMessage, awaitArrival;
                                                                                                                return {
                                                                                                                    setters: [function (_handleResponseJs) {
                                                                                                                        handleResponse = _handleResponseJs['default'];
                                                                                                                    }, function (_displayDeliveryFailureMessageJs) {
                                                                                                                        displayDeliveryFailureMessage = _displayDeliveryFailureMessageJs['default'];
                                                                                                                    }, function (_awaitArrivalJs) {
                                                                                                                        awaitArrival = _awaitArrivalJs['default'];
                                                                                                                    }],
                                                                                                                    execute: function execute() {

                                                                                                                        angular.module('App', ['gridster']).controller('mainCtrl', function ($scope, $http) {

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

                                                                                                                            function sendInvite() {
                                                                                                                                var _self = {};

                                                                                                                                var promise = $http.get('http://localhost:3002/invitePeople');

                                                                                                                                function atTheDoor(data) {
                                                                                                                                    alert('Guys are here, open?');
                                                                                                                                    data.people.forEach(function (person) {
                                                                                                                                        $scope.people.push(person);
                                                                                                                                    });
                                                                                                                                    $scope.$digest();
                                                                                                                                }

                                                                                                                                function neverShowsUp() {
                                                                                                                                    alert('These guys are always letting us down');
                                                                                                                                }

                                                                                                                                _self.whenPeopleRespond = function (responseFunc, awaitFunc) {
                                                                                                                                    promise.success(function (response) {
                                                                                                                                        var wait = responseFunc(response);
                                                                                                                                        if (wait) {
                                                                                                                                            awaitFunc(atTheDoor, neverShowsUp);
                                                                                                                                        } else {
                                                                                                                                            alert('Ok');
                                                                                                                                        }
                                                                                                                                    });
                                                                                                                                    return _self;
                                                                                                                                };

                                                                                                                                _self.whenPeopleDontGetTheInvite = function (failureFunc) {
                                                                                                                                    promise['catch'](failureFunc);
                                                                                                                                    return _self;
                                                                                                                                };

                                                                                                                                return _self;
                                                                                                                            }

                                                                                                                            $scope.onClick = function () {

                                                                                                                                sendInvite().whenPeopleRespond(handleResponse, awaitArrival).whenPeopleDontGetTheInvite(displayDeliveryFailureMessage);
                                                                                                                            };
                                                                                                                        });

                                                                                                                        angular.element(document).ready(function () {
                                                                                                                            return angular.bootstrap(document.body, ['App']);
                                                                                                                        });
                                                                                                                    }
                                                                                                                };
                                                                                                            });
                                                                                                        }
                                                                                                    };
                                                                                                });
                                                                                            }
                                                                                        };
                                                                                    });
                                                                                }
                                                                            };
                                                                        });
                                                                    }
                                                                };
                                                            });
                                                        }
                                                    };
                                                });
                                            }
                                        };
                                    });
                                }
                            };
                        });
                    }
                };
            });
        }
    };
});