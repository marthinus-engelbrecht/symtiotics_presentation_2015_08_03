System.register(['./asyncHttpGet.js'], function (_export) {
    'use strict';

    var asyncGetHttp;

    _export('default', sendInvite);

    function sendInvite(mediator) {
        var _self = {};

        var promise = asyncGetHttp('http://localhost:3002/invitePeople');

        function atTheDoor(data) {
            alert('Guys are here, open?');
            mediator.notify("peopleHaveArrived", data.people);
        }

        function neverShowsUp() {
            alert('These guys are always letting us down');
        }

        _self["when people respond"] = function (handleResponse, awaitArrival) {
            promise.then(function (response) {
                var wait = handleResponse(response);
                if (wait) {
                    awaitArrival(atTheDoor, neverShowsUp);
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

    return {
        setters: [function (_asyncHttpGetJs) {
            asyncGetHttp = _asyncHttpGetJs['default'];
        }],
        execute: function () {}
    };
});