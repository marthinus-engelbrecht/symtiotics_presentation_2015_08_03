angular.module('App', [ 'gridster' ]).controller('mainCtrl', function($scope) {

    $scope.people = [
        {
            size: { x: 1, y: 1 },
            position: [ 0, 0 ],
            name: "Douglas Crockford",
            style: {
                tile: {
                    "font-weight" : "bold",
                    color : "white",
                    "background-color" : "Black",
                    "text-align": "center"
                },
                image: {
                    "max-height" : "85%",
                    "max-width" : "100%"
                }
            },
            imageSrc : "images/Crockford_Douglas.png"
        },
        {
            size: { x: 1, y: 1 },
            position: [ 0, 2 ],
            name: "Brendan Eich",
            style: {
                tile: {
                    "font-weight" : "bold",
                    color : "white",
                    "background-color" : "Black",
                    "text-align": "center"
                },
                image: {
                    "max-height" : "85%",
                    "max-width" : "100%"
                }
            },
            imageSrc : "images/Brendan_Eich.jpg"
        }
    ];

    $scope.invitePeople = function(){

        var promise = $.get('http://localhost:3002/people').then(function(data){
            $scope.people.push(data);
            $scope.$digest();
        }).fail(function(){
            alert("The other people didn't get the invite")
        });
    }
});



