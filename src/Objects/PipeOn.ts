import { Bird } from "./Bird";
import { Pipe } from "./Pipe";
export class PipeOn extends Phaser.Physics.Arcade.Sprite {
    bird: Bird;
    obtascle !: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;
    pipe: Pipe;
    constructor(x: number, y: number ,img: string, bird: Bird, scene: Phaser.Scene, pipe: Pipe) {
        super(scene, x, y, img);
        this.bird = bird;
        this.pipe = pipe;
    }
    create() {
        this.obtascle = this.scene.physics.add.sprite(this.x, this.y, 'pipeOn');
        this.obtascle.setImmovable(true);
        this.obtascle.body.allowGravity = false;
        this.scene.physics.add.collider(this.bird.bodyBird, this.obtascle, (_player, _obtascle) => {
            if (_player.body.touching) {
                this.bird.isDead = true;
            }
        });
        this.obtascle.setVelocityX(-80);
    }
    update() {
        if (this.obtascle.x < - 20) {
            this.obtascle.x = 300;
            this.obtascle.y = this.pipe.obtascle.y - 420;
    }
    }
}