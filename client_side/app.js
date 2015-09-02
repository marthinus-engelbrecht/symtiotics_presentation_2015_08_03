angular.module('App', [ 'gridster' ]).controller('mainCtrl', function($scope, $http) {

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

    function sendInvite() {
        var _self = {};

        var promise = $http.get('http://localhost:3002/invitePeople');

        function atTheDoor(data) {
            alert('Guys are here, open?');
            data.people.forEach(function(person){
                        $scope.people.push(person);
                    });
        }

        function neverShowsUp() {
            alert('These guys are always letting us down');
        }

        _self.peopleRespond = function(responseFunc, theyCantMakeItFunc, awaitFunc) {
            promise.success(function(response) {
                    var wait = responseFunc(response);
                    if (wait) {
                        awaitFunc(atTheDoor, neverShowsUp);
                    }
                    else {
                        alert('Ok');
                    }
                });
            return _self;
        };

        _self.peopleDontGetTheInvite = function(failureFunc) {
            promise.catch(failureFunc);
            return _self;
        };

        return _self;
    }

    function responseHandler(data) {
        if (data.coming) {
            alert("Cool, be there in a bit");
            return data.coming;
        }
        else {
            alert("Can't make it we are busy");
            return data.coming;
        }
    }

    function displayDeliveryFailureMessage() {
        alert("Hey Crockford, I can't get hold of Uncle Bob and Addy");
    }

    function awaitThereArrival(atTheDoor, neverShowsUp) {
        $http.get('http://localhost:3002/awaitArrival')
            .success(function(data){
                atTheDoor(data);
            })
            .catch(neverShowsUp);
    }

    function theyCantMakeItFunc() {
        alert('Sorry guys we are a bit busy');
    }

    $scope.onClick = function() {

        sendInvite()
            .peopleRespond(responseHandler, theyCantMakeItFunc, awaitThereArrival)
            .peopleDontGetTheInvite(displayDeliveryFailureMessage);
    }
})
;


