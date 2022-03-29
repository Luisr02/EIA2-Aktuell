var EventInspector;
(function (EventInspector) {
    // install load listener on window 
    window.addEventListener("load", handleLoad);
    // 1. Funktion: handleLoad
    function handleLoad(_event) {
        // install mouse move listener on document, mouse move -> function setInfoBox
        document.addEventListener("mousemove", setInfoBox);
        // install click on document, body, divs -> function logInfo
        document.addEventListener("click", logInfo);
        document.body.addEventListener("click", logInfo);
        document.getElementById("div0").addEventListener("click", logInfo);
        document.getElementById("div1").addEventListener("click", logInfo);
        // install keyup-listeners on document, body, divs -> function logInfo
        document.addEventListener("keyup", logInfo);
        document.body.addEventListener("keyup", logInfo);
        document.getElementById("div0").addEventListener("keyup", logInfo);
        document.getElementById("div1").addEventListener("keyup", logInfo);
    }
    // 2. Funktion: setInfoBox
    function setInfoBox(_event) {
        var x = _event.clientX;
        var y = _event.clientY;
        var target = _event.target;
        var span = document.getElementById("span1");
        // display mouse position/event's target in span
        span.innerHTML = "position x: " + x + " " + "position y: " + y + " " + "target:" + target;
        // set style attributes top & left of span to mouseposition
        span.style.left = x + "px";
        span.style.top = y + "px";
    }
    // 3. Funktion: logInfo
    function logInfo(_event) {
        // log event's type, target, currentTarget, whole event object
        console.log(_event.type);
        console.log(_event.target);
        console.log(_event.currentTarget);
        console.log(_event);
    }
})(EventInspector || (EventInspector = {}));
//# sourceMappingURL=EventInspector.js.map