namespace StrandClasses {

    window.addEventListener("load", handleload);

    function handleload(_event: Event): void {
    
        let seagull: Seagull [] = [];
        let cloud: Cloud [] = [];
        let swimmers: Swimmers [] = [];

        drawObjects();
    }

    function drawObjects(): void {
        
        let cvs: HTMLCanvasElement = document.querySelector("canvas");
        let crc2: CanvasRenderingContext2D = cvs.getContext("2d");
        
        function drawOcean(_x: number, _y: number): void {
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
    
        function drawSky(_x: number, _y: number): void {
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
    
        function drawSun(_x: number, _y: number): void {
                crc2.beginPath();
                crc2.arc(400, 0, 70, 0, 2 * Math.PI, false);
                crc2.fillStyle = "#FFFF00";
                crc2.fill();
            }
    
        function drawPalm(_x: number, _y: number): void {
                /*Stem*/
                crc2.beginPath();
                crc2.moveTo(_x, _y);
                crc2.lineTo(_x + 10, _y);
                crc2.lineTo(_x + 10, _y - 50);
                crc2.lineTo(_x , _y - 50);
                crc2.lineTo(_x , _y);
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
    
        drawPalm(50, 550);
        drawPalm(300, 500);
    
        let cloud1: Cloud = new Cloud();
        let cloud2: Cloud = new Cloud();

        let seagull1: Seagull = new Seagull();
        let seagull2: Seagull = new Seagull();

        let swimmer1: Swimmers = new Swimmers();
        let swimmer1: Swimmers = new Swimmers();
    }
}


