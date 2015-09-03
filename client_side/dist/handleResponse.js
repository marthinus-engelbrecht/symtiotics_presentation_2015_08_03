System.register([], function (_export) {
    "use strict";

    _export("default", handleResponse);

    function handleResponse(data) {
        var shouldWait;
        if (data.coming) {
            alert("Cool, be there in a bit");
            shouldWait = true;
        } else {
            alert("Can't make it we are busy");
            shouldWait = false;
        }

        return shouldWait;
    }

    function theyCantMakeItFunc() {
        alert('Sorry guys we are a bit busy');
    }
    return {
        setters: [],
        execute: function () {}
    };
});