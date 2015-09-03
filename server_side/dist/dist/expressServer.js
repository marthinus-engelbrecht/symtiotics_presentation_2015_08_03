System.register([], function (_export2) {
    'use strict';

    return {
        setters: [],
        execute: function () {
            System.register([], function (_export) {
                'use strict';

                var express, app;
                return {
                    setters: [],
                    execute: function execute() {
                        express = require('express');
                        app = express();

                        app.use(express['static']('images'));

                        app.get('/awaitArrival', function (req, res) {
                            setTimeout(function () {
                                res.set("Access-Control-Allow-Origin", "*");
                                res.json({
                                    people: [{
                                        size: { x: 1, y: 1 },
                                        position: [2, 0],
                                        name: "Addy Osmani",
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
                                        imageSrc: "images/Addy_Osmani.jpg"
                                    }, {
                                        size: { x: 1, y: 1 },
                                        position: [2, 1],
                                        name: "Uncle Bob",
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
                                        imageSrc: "images/Uncle_Bob.jpg"
                                    }]
                                });
                            }, 10000);
                        });
                        app.get('/invitePeople', function (req, res) {
                            setTimeout(function () {
                                res.set("Access-Control-Allow-Origin", "*");
                                res.json({
                                    coming: true
                                });
                            }, 1000);
                        });

                        app.listen(3002);
                        console.log('Listening on port 3002...');
                    }
                };
            });
        }
    };
});