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
var StrandClasses;
(function (StrandClasses) {
    var Swimmers = /** @class */ (function (_super) {
        __extends(Swimmers, _super);
        function Swimmers() {
            var _this = _super.call(this, _this.position, _this.velocity) || this;
            return _this;
        }
        Swimmers.prototype.draw = function () {
            var x = Math.random() * 400;
            var y = Math.random() * 100;
            var cvs = document.querySelector("canvas");
            var crc2 = cvs.getContext("2d");
            /*Swimming Ring */
            crc2.beginPath();
            crc2.arc(x, y, 20, 0, 2 * Math.PI, false);
            crc2.fillStyle = "#FF0000";
            crc2.fill();
            crc2.beginPath();
            crc2.arc(x, y, 10, 0, 2 * Math.PI, false);
            crc2.fillStyle = "#269BAE";
            crc2.fill();
            /*Body*/
            crc2.beginPath();
            crc2.moveTo(x, y);
            crc2.lineTo(x, y - 40);
            crc2.moveTo(x, y - 25);
            crc2.lineTo(x + 10, y - 25);
            crc2.moveTo(x, y - 25);
            crc2.lineTo(x - 10, y - 25);
            crc2.strokeStyle = "#000000";
            crc2.stroke();
            /*Head*/
            crc2.beginPath();
            crc2.arc(x, y - 45, 10, 0, 2 * Math.PI, false);
            crc2.fillStyle = "#000000";
            crc2.fill();
        };
        Swimmers.prototype.animate = function (_timeslice) {
            var offset = new StrandClasses.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
        };
        return Swimmers;
    }(StrandClasses.Moveable));
    StrandClasses.Swimmers = Swimmers;
})(StrandClasses || (StrandClasses = {}));
//# sourceMappingURL=Swimmers.js.map