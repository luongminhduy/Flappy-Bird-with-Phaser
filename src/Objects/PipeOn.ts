import { Bird } from "./Bird";
import { Pipe } from "./Pipe";
export class PipeOn {
    x: number;
    y: number;
    img: string;
    bird: Bird;
    scene: Phaser.Scene;
    obtascle: any = 0;
    pipe: Pipe;
    constructor(x: number, y: number ,img: string, bird: Bird, scene: Phaser.Scene, pipe: Pipe) {
        this.x = x
        this.y = y;
        this.img = img;
        this.bird = bird;
        this.scene = scene;
        this.pipe = pipe;
    }
    create() {
        this.obtascle = this.scene.physics.add.image(this.x, this.y, this.img);
        this.obtascle.setImmovable(true);
        this.obtascle.body.allowGravity = false;
        this.scene.physics.add.collider(this.bird.player, this.obtascle, (_player, _obtascle) => {
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