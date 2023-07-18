namespace EventInspector {
    
    // install load listener on window 
    window.addEventListener("load", handleLoad);

    // 1. Funktion: handleLoad
    function handleLoad(_event: Event): void {

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
    function setInfoBox(_event: MouseEvent): void {
        
        let x: number = _event.clientX;
        let y: number = _event.clientY;
        let target: EventTarget = _event.target;
        let span: HTMLElement = document.getElementById("span1");
       
        // display mouse position/event's target in span
        span.innerHTML = "position x: " + x + " " + "position y: " + y + " " + "target:" + target;

        // set style attributes top & left of span to mouseposition
        span.style.left = x + "px";
        span.style.top = y + "px";
    }

    // 3. Funktion: logInfo
    function logInfo(_event: Event): void {
        // log event's type, target, currentTarget, whole event object
        console.log(_event.type);
        console.log(_event.target);
        console.log(_event.currentTarget);
        console.log(_event);
    }
}