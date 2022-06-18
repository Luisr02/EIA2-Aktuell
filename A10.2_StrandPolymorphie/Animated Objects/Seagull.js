"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Seagull = void 0;
var Seagull = /** @class */ (function (_super) {
    __extends(Seagull, _super);
    function Seagull() {
        var _this = _super.call(this, _this.position, _this.velocity) || this;
        return _this;
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
}(Moveable));
exports.Seagull = Seagull;
//# sourceMappingURL=Seagull.js.map