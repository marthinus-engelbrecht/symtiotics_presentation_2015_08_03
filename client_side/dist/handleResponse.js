System.register([], function (_export) {
    "use strict";

    _export("default", handleResponse);

    function handleResponse(data) {
        if (data.coming) {
            alert("Cool, be there in a bit");
            return data.coming;
        } else {
            alert("Can't make it we are busy");
            return data.coming;
        }
    }

    function theyCantMakeItFunc() {
        alert('Sorry guys we are a bit busy');
    }
    return {
        setters: [],
        execute: function () {}
    };
});