import { Base } from "./Base";
import { Bird } from "./Bird";
import { Pipe } from "./Pipe";
import { Score } from "./Score";

export class Star {
    bullet: Score;
    x: number;
    y: number;
    img: string;
    bird: Bird;
    pipe: Pipe;
    base: Base;
    scene: Phaser.Scene;
    obj: any = 0;
    constructor(x: number, y: number, img: string, bird: Bird, pipe: Pipe, base: Base, scene: Phaser.Scene, bullet: Score) {
        this.x = x;
        this.y = y;
        this.img = img;
        this.bird = bird;
        this.pipe = pipe;
        this.base = base;
        this.scene = scene;
        this.bullet = bullet;
    }
    create() {
        this.obj = this.scene.physics.add.sprite(this.x, this.y, this.img);
        this.obj.setImmovable(false);
        this.obj.body.allowGravity = false;
        this.obj.setVelocityX(-80);
 
        this.scene.physics.add.overlap(this.obj, this.bird.player, () => {
            this.obj.x = this.bird.player.x + 300;
            this.obj.setActive(false).setVisible(false);
            //this.obj.x = this.pipe.obtascle.x - 100;
            //this.obj.destroy();
            this.bullet.score += 1;
            this.bullet.create();
        })
    }
    update() {
        if (this.obj.x < 0 || !this.obj.visible && this.pipe.obtascle.x == 300) {
            this.obj.setActive(true).setVisible(true);
            this.obj.x = this.pipe.obtascle.x - 100;
             this.obj.y = Phaser.Math.Between(100, 300);
        }
    }
}