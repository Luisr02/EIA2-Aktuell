"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Moveable = void 0;
var Moveable = /** @class */ (function () {
    function Moveable(_position, _velocity) {
        this.posX = _position.x;
        this.posY = _position.y;
        this.velocity = _velocity.x;
        this.velocity = _velocity.y;
    }
    Moveable.prototype.draw = function () {
        console.log("draw");
    };
    Moveable.prototype.animate = function () {
        console.log("update");
    };
    return Moveable;
}());
exports.Moveable = Moveable;
//# sourceMappingURL=Moveable.js.map