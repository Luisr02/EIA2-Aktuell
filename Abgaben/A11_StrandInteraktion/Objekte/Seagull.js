"use strict";
var StrandInter;
(function (StrandInter) {
    class Seagull extends StrandInter.Moveable {
        position;
        velocity;
        constructor() {
            super(this.position, this.velocity);
        }
        draw() {
            let x = Math.random() * 400;
            let y = Math.random() * 120;
            let cvs = document.querySelector("canvas");
            let crc2 = cvs.getContext("2d");
            crc2.beginPath();
            crc2.moveTo(x, y);
            crc2.bezierCurveTo(x + 20, y, x, y + 20, x + 30, y);
            crc2.strokeStyle = "#000000";
            crc2.stroke();
        }
    }
    StrandInter.Seagull = Seagull;
})(StrandInter || (StrandInter = {}));
//# sourceMappingURL=Seagull.js.map