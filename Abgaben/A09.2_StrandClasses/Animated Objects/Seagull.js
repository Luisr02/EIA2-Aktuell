"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Seagull = void 0;
class Seagull {
    position;
    velocity;
    constructor() {
        this.position = (0);
        this.velocity = new Vector(0, 0);
        this.velocity.random(150, 400);
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
    animate(_timeslice) {
        let offset = new Vector(this.velocity.x, this.velocity.y);
        offset.scale(_timeslice);
        this.position.add(offset);
    }
}
exports.Seagull = Seagull;
//# sourceMappingURL=Seagull.js.map