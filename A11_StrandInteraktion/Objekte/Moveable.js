var StrandInter;
(function (StrandInter) {
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
        return Moveable;
    }());
    StrandInter.Moveable = Moveable;
})(StrandInter || (StrandInter = {}));
//# sourceMappingURL=Moveable.js.map