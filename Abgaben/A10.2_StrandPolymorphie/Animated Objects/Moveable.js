"use strict";
var StrandClasses;
(function (StrandClasses) {
    class Moveable {
        posX;
        posY;
        position;
        velocity;
        constructor(_position, _velocity) {
            this.posX = _position.x;
            this.posY = _position.y;
            this.velocity = _velocity.x;
            this.velocity = _velocity.y;
        }
        draw() {
            console.log("draw");
        }
        animate(_timeslice) {
            console.log("update");
        }
    }
    StrandClasses.Moveable = Moveable;
})(StrandClasses || (StrandClasses = {}));
//# sourceMappingURL=Moveable.js.map