System.register([], function (_export) {
    "use strict";

    var Mediator;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [],
        execute: function () {
            Mediator = (function () {
                function Mediator() {
                    _classCallCheck(this, Mediator);

                    this.handlers = {};
                }

                _createClass(Mediator, [{
                    key: "listen",
                    value: function listen(event_name, func) {
                        if (!this.handlers[event_name]) {
                            this.handlers[event_name] = [];
                        }
                        this.handlers[event_name].push(func);
                    }
                }, {
                    key: "notify",
                    value: function notify(event_name, payload) {
                        this.handlers[event_name].forEach(function (func) {
                            func(payload);
                        });
                    }
                }, {
                    key: "getHandlers",
                    value: function getHandlers(event_name) {
                        return this.handlers[event_name];
                    }
                }]);

                return Mediator;
            })();

            _export("default", Mediator);
        }
    };
});