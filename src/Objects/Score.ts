import { Pipe } from "./Pipe";
export class Score {
    x: number;
    y: number;
    score: number;
    img: string[];
    scene: Phaser.Scene;
    object: any = 0;
    objectFirst: any = 0;
    objectSecond: any = 0;
    scale: number = 1;
    constructor(x: number, y: number, score: number, img: string[], scene: Phaser.Scene) {
        this.x = x;
        this.y = y;
        this.score = score;
        this.img = img;
        this.scene = scene;
    }
    create() {
        if (this.object != 0) this.object.destroy();
        if (this.objectFirst != 0 && this.objectSecond != 0) {
            this.objectFirst.destroy();
            this.objectSecond.destroy();
        }
        if (this.score <= 0) {
            this.object = this.scene.add.image(this.x, this.y, this.img[0]).setScale(this.scale);
        }
        else if (this.score <= 9) {
            this.object = this.scene.add.image(this.x, this.y, this.img[this.score]).setScale(this.scale);
        }
        else if (this.score >= 10 && this.score <= 99) {
            var second = this.score % 10;
            var first = Math.floor(this.score / 10);
            this.objectFirst = this.scene.add.image(this.x - 14, this.y, this.img[first]).setScale(this.scale);
            this.objectSecond = this.scene.add.image(this.x + 14, this.y, this.img[second]).setScale(this.scale);
        }
    }
    update(pipe: Pipe) {
        if (pipe.obtascle.x == -10)
            console.log("aaaa");
            this.score++;
            console.log(this.score);
            this.create();
    }
}