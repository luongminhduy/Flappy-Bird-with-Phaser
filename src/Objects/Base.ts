import { Bird } from "./Bird";

export class Base {
    x: number;
    y: number;
    img: string;
    bird: Bird;
    constructor(x: number, y: number, img: string, bird: Bird) {
        this.x = x;
        this.y = y;
        this.img = img;
        this.bird = bird;
    }
    
}