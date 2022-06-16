import { Bird } from "./Bird";

export class Fire {
    img: string;
    bird: Bird;
    shot: any = 0;
    scene: Phaser.Scene;
    constructor(img: string, bird: Bird, scene: Phaser.Scene) {
        this.img = img;
        this.bird = bird;
        this.scene = scene;
    }
    create() {
        var x = this.bird.player.x;
        var y = this.bird.player.y;
        this.shot = this.scene.physics.add.sprite(x, y, this.img).setScale(0.1);
        this.shot.setImmovable(false);
        this.shot.body.allowGravity = false;
        this.shot.setVelocityX(300);
    }
    update() {
        if (this.shot) {
            this.shot.angle += 20;
        }
    }
}