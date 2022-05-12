namespace Strand {

    window.addEventListener("load", handleload);

    function handleload(_event: Event): void {

        let cvs: HTMLCanvasElement = document.querySelector("canvas");
        let crc2: CanvasRenderingContext2D = cvs.getContext("2d");

        function drawOcean (_x: number, _y: number): void {
    
            let x: number = 210;
            let y: number = 70;
            crc2.beginPath();
            crc2.arc(x, y, 120, 0, 2 * Math.PI, false);
            crc2.lineWidth = 3;
            crc2.fillStyle = "#5a92ed";
            crc2.fill();
        }

        drawOcean( 100, 100);
    }

    
}