namespace StrandClasses {
export class Seagull extends Moveable {
   
    position: number;
    velocity: Vector;

    constructor() {
        super(this.position, this.velocity);
    }

    draw (): void {
        let x: number = Math.random() * 400;
        let y: number = Math.random() * 120;
        let cvs: HTMLCanvasElement = document.querySelector("canvas");
        let crc2: CanvasRenderingContext2D = cvs.getContext("2d");
    
        crc2.beginPath();
        crc2.moveTo(x, y);
        crc2.bezierCurveTo(x + 20, y, x, y + 20, x + 30, y);
        crc2.strokeStyle = "#000000";
        crc2.stroke(); 
    }  
    
    animate (_timeslice: number): void {
        let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
        offset.scale(_timeslice);
        this.position.add(offset);
    }
        
}
}