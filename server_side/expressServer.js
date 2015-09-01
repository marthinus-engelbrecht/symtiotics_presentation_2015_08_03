var express = require('express');
var app = express();

app.use(express.static('images'));

app.get('/names', function(req, res){
    setTimeout(function(){
        res.set("Access-Control-Allow-Origin", "*");
        res.json({
            size: { x: 1, y: 1 },
            position: [ 2, 0 ],
            name: "Addy Osmani",
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
            imageSrc : "images/Addy_Osmani.jpg"
        })
    }, 10000);
});

app.listen(3002);
console.log('Listening on port 3002...');