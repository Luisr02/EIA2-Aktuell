var Strand;
(function (Strand) {
    window.addEventListener("load", handleload);
    function handleload(_event) {
        var cvs = document.querySelector("canvas");
        var crc2 = cvs.getContext("2d");
        function drawOcean(_x, _y) {
            var x = 210;
            var y = 70;
            crc2.beginPath();
            crc2.arc(x, y, 120, 0, 2 * Math.PI, false);
            crc2.lineWidth = 3;
            crc2.fillStyle = "#5a92ed";
            crc2.fill();
        }
        drawOcean(100, 100);
    }
})(Strand || (Strand = {}));
//# sourceMappingURL=strand.js.map