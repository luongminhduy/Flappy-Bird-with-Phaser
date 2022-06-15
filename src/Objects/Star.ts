import { Base } from "./Base";
import { Bird } from "./Bird";
import { Pipe } from "./Pipe";

export class Star {
    x: number;
    y: number;
    img: string;
    bird: Bird;
    pipe: Pipe;
    base: Base;
    scene: Phaser.Scene;
    obj: any = 0;
    constructor(x: number, y: number, img: string, bird: Bird, pipe: Pipe, base: Base, scene: Phaser.Scene) {
        this.x = x;
        this.y = y;
        this.img = img;
        this.bird = bird;
        this.pipe = pipe;
        this.base = base;
        this.scene = scene;
    }
    create() {
        this.obj = this.scene.physics.add.sprite(this.x, this.y, this.img);
        this.obj.setImmovable(true);
        this.obj.body.allowGravity = false;
        this.obj.setVelocityX(-80);
        this.scene.physics.add.overlap(this.obj, this.bird.player, () => {
            this.obj.setVisible(false);
        })
    }
    update() {
        if (this.obj.x < - 20 || !this.obj) {
             this.obj.x = 300;
             this.obj.y = Phaser.Math.Between(100, 300);
             this.obj.setVisible(true);
        }
    }
}