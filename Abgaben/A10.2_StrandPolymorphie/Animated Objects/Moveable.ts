namespace StrandClasses {
export abstract class Moveable {
    posX: number;
    posY: number;

    position: number;
    velocity: Vector;

    constructor(_position: Vector, _velocity: Vector) {
          this.posX = _position.x; 
          this.posY = _position.y; 

          this.velocity = _velocity.x;
          this.velocity = _velocity.y;
    }

    draw(): void {
        console.log("draw");
    }

    animate(_timeslice: number): void {
        console.log("update");
    }
}
}