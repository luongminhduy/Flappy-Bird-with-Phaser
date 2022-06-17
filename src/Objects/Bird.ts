export class Bird {
    player: any = 0;
    x: number;
    y: number;
    angle: number = 85;
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
        this.player = this.scene.physics.add.sprite(this.x, this.y, this.img);
        this.player.play('flap');
    }
    update() {
        if (this.player.angle <= 60)
            this.player.angle += 4;
        if (this.isDead)  this.scene.scene.start('GameOver'); 
        if (this.player.y < - 50) this.isDead = true;   
    }
}