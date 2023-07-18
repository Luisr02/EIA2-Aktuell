"use strict";
var Strand;
(function (Strand) {
    window.addEventListener("load", handleload);
    function handleload(_event) {
        let cvs = document.querySelector("canvas");
        let crc2 = cvs.getContext("2d");
        function drawOcean(_x, _y) {
            crc2.beginPath();
            crc2.moveTo(0, 150);
            crc2.lineTo(400, 150);
            crc2.lineTo(400, 400);
            crc2.lineTo(0, 400);
            crc2.lineTo(0, 150);
            crc2.closePath();
            crc2.fillStyle = "#269BAE";
            crc2.fill();
        }
        function drawSky(_x, _y) {
            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.lineTo(400, 0);
            crc2.lineTo(400, 150);
            crc2.lineTo(0, 150);
            crc2.lineTo(0, 0);
            crc2.closePath();
            crc2.fillStyle = "#14D4F3";
            crc2.fill();
        }
        function drawSun(_x, _y) {
            crc2.beginPath();
            crc2.arc(400, 0, 70, 0, 2 * Math.PI, false);
            crc2.fillStyle = "#FFFF00";
            crc2.fill();
        }
        function drawClouds(_x, _y) {
            let x = Math.random() * 400;
            let y = Math.random() * 100;
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
        }
        function drawSeagulls(_x, _y) {
            let x = Math.random() * 400;
            let y = Math.random() * 120;
            crc2.beginPath();
            crc2.moveTo(x, y);
            crc2.bezierCurveTo(x + 20, y, x, y + 20, x + 30, y);
            crc2.strokeStyle = "#000000";
            crc2.stroke();
        }
        function drawSwimmer(_x, _y) {
            /*Swimming Ring */
            crc2.beginPath();
            crc2.arc(_x, _y, 20, 0, 2 * Math.PI, false);
            crc2.fillStyle = "#FF0000";
            crc2.fill();
            crc2.beginPath();
            crc2.arc(_x, _y, 10, 0, 2 * Math.PI, false);
            crc2.fillStyle = "#269BAE";
            crc2.fill();
            /*Body*/
            crc2.beginPath();
            crc2.moveTo(_x, _y);
            crc2.lineTo(_x, _y - 40);
            crc2.moveTo(_x, _y - 25);
            crc2.lineTo(_x + 10, _y - 25);
            crc2.moveTo(_x, _y - 25);
            crc2.lineTo(_x - 10, _y - 25);
            crc2.strokeStyle = "#000000";
            crc2.stroke();
            /*Head*/
            crc2.beginPath();
            crc2.arc(_x, _y - 45, 10, 0, 2 * Math.PI, false);
            crc2.fillStyle = "#000000";
            crc2.fill();
        }
        function drawPalm(_x, _y) {
            /*Stem*/
            crc2.beginPath();
            crc2.moveTo(_x, _y);
            crc2.lineTo(_x + 10, _y);
            crc2.lineTo(_x + 10, _y - 50);
            crc2.lineTo(_x, _y - 50);
            crc2.lineTo(_x, _y);
            crc2.closePath();
            crc2.fillStyle = "#855608";
            crc2.fill();
            /*Leaves*/
            crc2.beginPath();
            crc2.arc(_x - 5, _y - 50, 20, 0, 1 * Math.PI, true);
            crc2.fillStyle = "#3AE109";
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.arc(_x + 15, _y - 50, 20, 0, 1 * Math.PI, true);
            crc2.fillStyle = "#3AE109";
            crc2.closePath();
            crc2.fill();
        }
        drawOcean(0, 0);
        drawSky(0, 0);
        drawSun(0, 0);
        for (let index = 0; index < 2; index++) {
            drawClouds(0, 0);
        }
        for (let index = 0; index < 7; index++) {
            drawSeagulls(0, 0);
        }
        drawSwimmer(100, 250);
        drawSwimmer(300, 300);
        drawPalm(50, 550);
        drawPalm(300, 500);
    }
})(Strand || (Strand = {}));
//# sourceMappingURL=strand.js.map