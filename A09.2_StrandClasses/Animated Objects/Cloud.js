"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cloud = void 0;
var Cloud = /** @class */ (function () {
    function Cloud() {
        this.position = (0);
        this.velocity = new Vector(0, 0);
        this.velocity.random(150, 400);
    }
    Cloud.prototype.draw = function () {
        var x = Math.random() * 400;
        var y = Math.random() * 100;
        var cvs = document.querySelector("canvas");
        var crc2 = cvs.getContext("2d");
        crc2.beginPath();
        crc2.moveTo(x, y);
        crc2.bezierCurveTo(x - 20, y + 5, x - 10, y + 90, x + 30, y + 35);
        crc2.bezierCurveTo(x + 50, y + 50, x + 75, y + 50, x + 75, y + 35);
        crc2.bezierCurveTo(x + 140, y + 35, x + 115, y + 20, x + 105, y + 10);
        crc2.bezierCurveTo(x + 180, y - 20, x + 105, y - 25, x + 80, y - 15);
        crc2.bezierCurveTo(x + 75, y - 40, x + 40, y - 30, x + 35, y - 15);
        crc2.bezierCurveTo(x + 15, y - 40, x - 5, y - 30, x, y);
        crc2.closePath();
        crc2.fillStyle = "#FFFFFF";
        crc2.fill();
    };
    Cloud.prototype.animate = function (_timeslice) {
        var offset = new Vector(this.velocity.x, this.velocity.y);
        offset.scale(_timeslice);
        this.position.add(offset);
    };
    return Cloud;
}());
exports.Cloud = Cloud;
//# sourceMappingURL=Cloud.js.map