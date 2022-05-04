var generativeKunst;
(function (generativeKunst) {
    window.addEventListener("load", handleload);
    function handleload(_event) {
        var cvs = document.querySelector("canvas");
        var crc2 = cvs.getContext("2d");
        var randomNumber = Math.random() * 100;
        for (var index = 0; index < randomNumber; index++) {
            var x = Math.random() * 600;
            var y = Math.random() * 600;
            drawShape1(x, y);
            drawShape2(x, y);
            drawShape3(x, y);
        }
        function drawShape1(_x, _y) {
            var x = Math.random() * 600;
            var y = Math.random() * 600;
            crc2.beginPath();
            crc2.moveTo(x, y);
            crc2.lineTo(x + 50, y + 50);
            crc2.lineTo(x + 50, y);
            crc2.lineTo(x, y + 50);
            crc2.closePath();
            crc2.fillStyle = "#0000ff";
            crc2.strokeStyle = "#ff0000";
            crc2.stroke();
            crc2.fill();
        }
        function drawShape2(_x, _y) {
            var x = Math.random() * 600;
            var y = Math.random() * 600;
            crc2.beginPath();
            crc2.moveTo(x, y);
            crc2.lineTo(x + 30, y - 50);
            crc2.lineTo(x + 10, y);
            crc2.lineTo(x, y + 100);
            crc2.closePath();
            crc2.fillStyle = "#635019";
            crc2.strokeStyle = "#E09F7D";
            crc2.stroke();
            crc2.fill();
        }
        function drawShape3(_x, _y) {
            var x = Math.random() * 600;
            var y = Math.random() * 600;
            crc2.beginPath();
            crc2.arc(x, y, 30, 0, 2 * Math.PI, false);
            crc2.lineWidth = 3;
            crc2.strokeStyle = "#FF0000";
            crc2.stroke();
        }
    }
})(generativeKunst || (generativeKunst = {}));
//# sourceMappingURL=GenerativeKunst.js.map