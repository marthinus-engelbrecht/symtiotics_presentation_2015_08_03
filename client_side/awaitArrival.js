import asyncHttpGet from './asyncHttpGet.js';

export default function(atTheDoor, neverShowsUp) {

    asyncHttpGet('http://localhost:3002/awaitArrival')
        .then(function(data){
            atTheDoor(data);
        }, function(){
            neverShowsUp();
        })
}

