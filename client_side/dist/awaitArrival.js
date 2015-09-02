System.register([], function (_export) {
    "use strict";

    function asnycHttpGet(url) {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", url, true);
        return new Promise(function (resolve, reject) {
            xmlhttp.onload = function () {
                if (xmlhttp.status == 200) {
                    resolve(JSON.parse(xmlhttp.response));
                } else {
                    reject(Error(xmlhttp.statusText));
                }
            };

            xmlhttp.onerror = function () {
                reject(Error("Network Error"));
            };

            xmlhttp.send();
        });
    }

    return {
        setters: [],
        execute: function () {
            _export("default", function (atTheDoor, neverShowsUp) {
                asnycHttpGet('http://localhost:3002/awaitArrival').then(function (data) {
                    atTheDoor(data);
                }, function () {
                    neverShowsUp();
                });
            });
        }
    };
});