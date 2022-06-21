//import { Pipe } from "./Pipe";
export class Score extends Phaser.GameObjects.Image {
    score: number;
    img: string[];
    object !: Phaser.GameObjects.Text
    scale: number = 1;
    constructor(x: number, y: number, score: number, img: string[], scene: Phaser.Scene) {
        super(scene, x, y, img[0]);
        this.score = score;
        this.img = img;
       
    }
    create() {
            this.object = this.scene.add.text(this.x, this.y, this.score.toString(), { fontFamily: 'Arial', color: '#ffffff' }).setScale(3*this.scale);
            this.object.setDepth(100);
            this.object.setOrigin(0.5, 0.5)
            this.object.setResolution(2.5);
    }
    update() {
            this.object.setText(this.score.toString())
    }
}