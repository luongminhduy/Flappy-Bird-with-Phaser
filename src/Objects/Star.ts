import { Base } from "./Base";
import { Bird } from "./Bird";
import { Pipe } from "./Pipe";
import { Score } from "./Score";

export class Star extends Phaser.Physics.Arcade.Sprite {
    bullet: Score;
    bird: Bird;
    pipe: Pipe;
    base: Base;
    obj !: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;
    constructor(x: number, y: number, img: string, bird: Bird, pipe: Pipe, base: Base, scene: Phaser.Scene, bullet: Score) {
        super(scene, x, y, img);
        this.bird = bird;
        this.pipe = pipe;
        this.base = base;
        this.bullet = bullet;
    }
    create() {
        this.obj = this.scene.physics.add.sprite(this.x, this.y, 'star');
        this.obj.setImmovable(false);
        this.obj.body.allowGravity = false;
        this.obj.setVelocityX(-80);
 
        this.scene.physics.add.overlap(this.obj, this.bird.bodyBird, () => {
            this.obj.x = this.bird.bodyBird.x + 300;
            this.obj.setActive(false).setVisible(false);
            //this.obj.x = this.pipe.obtascle.x - 100;
            //this.obj.destroy();
            this.scene.sound.add('star').play();
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