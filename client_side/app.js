angular.module('App', [ 'gridster' ]).controller('mainCtrl', function($scope) {

    $scope.customItems = [
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
        //{ size: { x: 1, y: 1 }, position: [ 0, 4 ] },
        //{ size: { x: 1, y: 1 }, position: [ 0, 5 ] },
        //{ size: { x: 2, y: 1 }, position: [ 1, 0 ] },
        //{ size: { x: 1, y: 1 }, position: [ 1, 4 ] },
        //{ size: { x: 1, y: 2 }, position: [ 1, 5 ] },
        //{ size: { x: 1, y: 1 }, position: [ 2, 0 ] },
        //{ size: { x: 2, y: 1 }, position: [ 2, 1 ] },
        //{ size: { x: 1, y: 1 }, position: [ 2, 3 ] },
        //{ size: { x: 1, y: 1 }, position: [ 2, 4 ] }
    ];

    $scope.getPeople = function(){

        $.get('http://localhost:3002/names', function(data) {
            $scope.customItems.push(data);
            $scope.$digest();
        });
    }
});



