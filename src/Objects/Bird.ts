export class Bird {
    x: number;
    y: number;
    img: string;
    isDead: boolean;
    animations: string[];
    scene: Phaser.Scene;
    constructor(x: number, y: number, img: string, isDead: boolean, scene: Phaser.Scene, animations: string[]) {
        this.x = x;
        this.y = y;
        this.img = img;
        this.isDead = isDead;
        this.scene = scene;
        this.animations = animations;
    }
    create() {
        this.scene.anims.create({
            key: 'flap',
            frames: [
                { key: this.animations[0] },
                { key: this.animations[1] },
                { key: this.animations[2], duration: 50 }
            ],
            frameRate: 8,
            repeat: -1
        });
        this.scene.physics.add.sprite(this.x, this.y, this.img).play('flap');

    }
}