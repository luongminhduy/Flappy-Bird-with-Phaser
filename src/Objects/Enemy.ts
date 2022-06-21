import { Bird } from "./Bird";
import { Fire } from "./Fire";
import { Score } from "./Score";

export class Enemy extends Phaser.Physics.Arcade.Sprite{
    obj!: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;
    bird: Bird;
    fire: Fire;
    score: Score;
    constructor(x: number, y: number, img: string[], bird: Bird, fire: Fire, score: Score, scene: Phaser.Scene) {
        super(scene, x, y, img[0]);
        this.bird = bird;
        this.fire = fire;
        this.score = score;
       
    }
    create() {
        this.scene.sound.add('enemy').play();
        this.scene.anims.create({
            key: 'flap-enemy',
            frames: [
                { key: 'enemy1' },
                { key: 'enemy2' },
                { key: 'enemy3', duration: 90 }
            ],
            frameRate: 8,
            repeat: 1
        });
        this.obj = this.scene.physics.add.sprite(this.x, this.y, 'enemy1');
        this.obj.play('flap-enemy');
        this.scene.physics.add.collider(this.bird.bodyBird, this.obj, (_player, _obtascle) => {
            if (_player.body.touching) {
                    //this.bird.isDead = true;
                    this.bird.bodyBird.setVelocityY(200);
                    this.bird.bodyBird.setVelocityX(0);
                    
            }        
        });
        var X =  Phaser.Math.Between(-500, - 200);
        var Y =  Phaser.Math.Between(-500, - 200);
        this.obj.setVelocityX(X);
        this.obj.setVelocityY(Y);
        this.obj.setImmovable(false);
        if (this.fire.shot)
        this.scene.physics.add.collider(this.fire.shot, this.obj, (_player, _obtascle) => {
            if (_obtascle.body.touching || _player.body.touching) {
                this.fire.shot.setScale(1);
                this.fire.shot.play('flap-enemy', false);
                this.fire.shot.once('animationcomplete', () => {
                    this.fire.shot.destroy();
                })
                this.scene.sound.add('hit').play();
                this.obj.destroy();
                this.score.score += 2;
                //this.score.create();
            }      
        });
    }
    update() {
        if (this.fire.shot)
        this.scene.physics.add.collider(this.fire.shot, this.obj, (_player, _obtascle) => {
            if (_obtascle.body.touching || _player.body.touching) {
                this.fire.shot.setScale(1);
                this.fire.shot.play('flap-enemy', false);
                this.fire.shot.once('animationcomplete', () => {
                    console.log('SPRITE_ANIMATION_COMPLETE');
                    this.fire.shot.destroy();
                })
                this.scene.sound.add('hit').play();
                this.obj.destroy();
                this.score.score += 2;
                //this.score.create();
            }        
        });
    }
}