export default function asnycHttpGet(url){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", url ,true);
    return new Promise(function(resolve, reject){
        xmlhttp.onload = function() {
            if (xmlhttp.status == 200) {
                resolve(JSON.parse(xmlhttp.response));
            }
            else {
                reject(Error(xmlhttp.statusText));
            }
        };

        xmlhttp.onerror = function() {
            reject(Error("Network Error"));
        };

        xmlhttp.send();
    });
}