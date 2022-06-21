import { Bird } from "./Bird";
import { Score } from "./Score";

export class Pipe extends Phaser.Physics.Arcade.Sprite {
    score: Score;
    bird: Bird;
    obtascle !: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;
    constructor(x: number, y: number, img: string, bird: Bird, scene: Phaser.Scene, score: Score) {
        super(scene, x, y, img);
        this.bird = bird;
        this.score = score;
    }
    create() {
        this.obtascle = this.scene.physics.add.sprite(this.x, this.y, 'pipeUnder');
        this.obtascle.setImmovable(true);
        this.obtascle.body.allowGravity = false;
        this.obtascle.setVelocityX(-80);
        this.scene.physics.add.collider(this.bird.bodyBird, this.obtascle, (_player, _obtascle) => {
            if (_player.body.touching) {
                var temp = this.score.score;
                if (temp > parseInt(localStorage.getItem('highScore')!))
                    localStorage.setItem('highScore', temp.toString());
                this.bird.isDead = true;
            }        
        });
    }
    update() {
        if (this.obtascle.x < - 20) {
                this.obtascle.x = 300;
                this.obtascle.y = Phaser.Math.Between(240, 530);
                this.score.score++;
                if (this.score.score > 0)
                    this.scene.sound.add('score').play();
                this.score.create();
        }
    }
}