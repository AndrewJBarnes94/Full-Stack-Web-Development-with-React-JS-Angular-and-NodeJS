var h1 = document.querySelector("h1");
h1.style.color = "red";

var isYellow = false;
var bodyElement = document.querySelector("body");
setInterval(function() {
    if (isYellow) {
        bodyElement.style.background = "green";
    } else {
        bodyElement.style.background = "yellow";
    }
    isYellow = !isYellow;
}, 1000);