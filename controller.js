const v = new View();
const mode = new Model();


function loadFromServer() {
    let req = new XMLHttpRequest();
    req.onreadystatechange = function () {
        if(req.readyState === 4 && req.status === 200){
            let elem=req.responseText;
            callback(elem);
        }
    };
    req.open("GET", "https://devweb2020.cis.strath.ac.uk/~gxb18167/MAD/MAD-GP/note.xml", true);
    req.send();
}
function callback(elem) {
    mode.newRates(elem)
}

window.addEventListener("load", function() {
    console.log("loaded: ");
    loadFromServer();
    v.PastCases();
});

document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);

let xDown = null;
let yDown = null;

function getTouches(evt) {
    return evt.touches ||             // browser API
        evt.originalEvent.touches; // jQuery
}

function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
}

function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }
    let xUp = evt.touches[0].clientX;
    let yUp = evt.touches[0].clientY;
    let xDiff = xDown - xUp;
    let yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            let OpenState = localStorage.getItem("Open");
            if(OpenState === "Nav1"){
                v.closeNav1();
            }
            if(OpenState === "Nav2"){
                v.closeNav2();
            }

        }
        /* reset values */
        xDown = null;
        yDown = null;
    }}










