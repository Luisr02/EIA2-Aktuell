var StrandClasses;
(function (StrandClasses) {
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
        Moveable.prototype.animate = function (_timeslice) {
            console.log("update");
        };
        return Moveable;
    }());
    StrandClasses.Moveable = Moveable;
})(StrandClasses || (StrandClasses = {}));
//# sourceMappingURL=Moveable.js.map