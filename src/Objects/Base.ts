import { Bird } from "./Bird";
import { Score } from "./Score";

export class Base extends Phaser.Physics.Arcade.Sprite {
    bird: Bird;
    score: Score;
    constructor(x: number, y: number, img: string, bird: Bird, score: Score,  scene: Phaser.Scene) {
        super(scene, x, y, img);
        this.bird = bird;
        this.score = score;

    }
    create() {
        var base = this.scene.physics.add.image(this.x, this.y, this.texture);
        base.setImmovable(true);
        base.body.allowGravity = false;
        this.scene.physics.add.collider(this.bird.bodyBird, base, (_player, _obtascle) => {
            if (_player.body.touching) {
                var temp = this.score.score;
                if (temp > parseInt(localStorage.getItem('highScore')!))
                    localStorage.setItem('highScore', temp.toString());
                    this.bird.isDead = true;
            }        
        });
    }   
}