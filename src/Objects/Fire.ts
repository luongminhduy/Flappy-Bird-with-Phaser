import { Bird } from "./Bird";

export class Fire extends Phaser.Physics.Arcade.Sprite {
    bird: Bird;
    shot !: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;
    constructor(img: string, bird: Bird, scene: Phaser.Scene) {
        super(scene, bird.x, bird.y, img);
        this.bird = bird;       
    }
    create() {
        var x = this.bird.bodyBird.x;
        var y = this.bird.bodyBird.y;
        this.shot = this.scene.physics.add.sprite(x, y,'fire').setScale(0.12);
        this.shot.setImmovable(true);
        this.shot.body.allowGravity = false;
        this.shot.setVelocityX(300);
    }
    update() {
        if (this.shot) {
            this.shot.angle += 20;
        }
    }
}