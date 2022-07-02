namespace StrandInter {
export class Swimmers extends Moveable {
   
    position: number;
    velocity: Vector;

    constructor() {
        super(this.position, this.velocity);
    }

    draw (): void {
        let x: number = Math.random() * 400;
        let y: number = Math.random() * 100;
        let cvs: HTMLCanvasElement = document.querySelector("canvas");
        let crc2: CanvasRenderingContext2D = cvs.getContext("2d");
    
    
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
        }
     
    }

}

