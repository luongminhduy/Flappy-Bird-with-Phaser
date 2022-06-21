export class Bird extends Phaser.Physics.Arcade.Sprite {
    isDead: boolean;
    bodyBird !: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;
    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y, 'birdUp');
        this.isDead = false;
        this.angle = -85;
    }
    create() {
        this.scene.anims.create({
            key: 'flap',
            frames: [
                { key: 'birdUp' },
                { key: 'birdMid' },
                { key: 'birdDown', duration: 50 }
            ],
            frameRate: 8,
            repeat: -1
        });
        this.bodyBird = this.scene.physics.add.sprite(this.x, this.y, 'birdUp').play('flap');
    }
    update() {
        if (this.bodyBird.angle <= 85) {
            this.bodyBird.angle += 4;
        }
        if (this.isDead)  this.scene.scene.start('GameOver'); 
        if (this.bodyBird.y < - 50) this.isDead = true;
    }
}