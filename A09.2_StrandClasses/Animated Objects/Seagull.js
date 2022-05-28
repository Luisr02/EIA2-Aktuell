"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Seagull = void 0;
var Seagull = /** @class */ (function () {
    function Seagull() {
        this.position = (0);
        this.velocity = new Vector(0, 0);
        this.velocity.random(150, 400);
    }
    Seagull.prototype.draw = function () {
        var x = Math.random() * 400;
        var y = Math.random() * 120;
        var cvs = document.querySelector("canvas");
        var crc2 = cvs.getContext("2d");
        crc2.beginPath();
        crc2.moveTo(x, y);
        crc2.bezierCurveTo(x + 20, y, x, y + 20, x + 30, y);
        crc2.strokeStyle = "#000000";
        crc2.stroke();
    };
    Seagull.prototype.animate = function (_timeslice) {
        var offset = new Vector(this.velocity.x, this.velocity.y);
        offset.scale(_timeslice);
        this.position.add(offset);
    };
    return Seagull;
}());
exports.Seagull = Seagull;
//# sourceMappingURL=Seagull.js.map