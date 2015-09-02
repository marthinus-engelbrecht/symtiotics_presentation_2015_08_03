System.register([], function (_export) {
    "use strict";

    var Person, douglas_crockford;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [],
        execute: function () {
            Person = (function () {
                function Person(name, imageSrc) {
                    _classCallCheck(this, Person);

                    this.name = name;
                    this.imageSrc = imageSrc;
                }

                _createClass(Person, [{
                    key: "name",
                    get: function get() {
                        return this.name;
                    },
                    set: function set(name) {
                        this.name = name;
                    }
                }, {
                    key: "imageSrc",
                    get: function get() {
                        return this.imageSrc;
                    },
                    set: function set(imageSrc) {
                        this.imageSrc = imageSrc;
                    }
                }]);

                return Person;
            })();

            douglas_crockford = new Person("Douglas Crockford", "images/Crockford_Douglas.png");
        }
    };
});