System.register(['./asyncHttpGet.js'], function (_export) {
    'use strict';

    var asyncHttpGet;
    return {
        setters: [function (_asyncHttpGetJs) {
            asyncHttpGet = _asyncHttpGetJs['default'];
        }],
        execute: function () {
            _export('default', function (atTheDoor, neverShowsUp) {

                asyncHttpGet('http://localhost:3002/awaitArrival').then(function (data) {
                    atTheDoor(data);
                }, function () {
                    neverShowsUp();
                });
            });
        }
    };
});