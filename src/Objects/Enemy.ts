import { Bird } from "./Bird";
import { Fire } from "./Fire";
import { Score } from "./Score";

export class Enemy {
    x: number;
    y: number;
    obj: any = 0;
    img: string[];
    bird: Bird;
    fire: Fire;
    score: Score;
    scene: Phaser.Scene;
    constructor(x: number, y: number, img: string[], bird: Bird, fire: Fire, score: Score, scene: Phaser.Scene) {
        this.x = x;
        this.y = y;
        this.img = img;
        this.bird = bird;
        this.fire = fire;
        this.score = score;
        this.scene = scene;
    }
    create() {
        this.scene.anims.create({
            key: 'flap-enemy',
            frames: [
                { key: this.img[0] },
                { key: this.img[1] },
                { key: this.img[1], duration: 90 }
            ],
            frameRate: 8,
            repeat: -1
        });
        this.obj = this.scene.physics.add.sprite(this.x, this.y, this.img[0]);
        this.obj.play('flap-enemy');
        this.scene.physics.add.collider(this.bird.player, this.obj, (_player, _obtascle) => {
            if (_player.body.touching) {
                    this.bird.isDead = true;
            }        
        });
        var X = Phaser.Math.Between(-500, - 200);
        var Y = Phaser.Math.Between(-500, - 200);
        this.obj.setVelocityX(X);
        this.obj.setVelocityY(Y);
        this.obj.setImmovable(false);
        this.scene.physics.add.collider(this.fire.shot, this.obj, (_player, _obtascle) => {
            if (_obtascle.body.touching) {
                //this.obj.setActive(false).setVisible(false);
                //this.obj.destroy();
                this.score.score += 2;
                this.score.create();
            }        
        });
    }
}