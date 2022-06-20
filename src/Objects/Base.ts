import { Bird } from "./Bird";
import { Score } from "./Score";

export class Base {
    x: number;
    y: number;
    img: string;
    bird: Bird;
    score: Score;
    scene: Phaser.Scene;
    constructor(x: number, y: number, img: string, bird: Bird, score: Score,  scene: Phaser.Scene) {
        this.x = x;
        this.y = y;
        this.img = img;
        this.bird = bird;
        this.score = score;
        this.scene = scene;
    }
    create() {
        var base = this.scene.physics.add.image(this.x, this.y, this.img);
        base.setImmovable(true);
        base.body.allowGravity = false;
        this.scene.physics.add.collider(this.bird.player, base, (_player, _obtascle) => {
            if (_player.body.touching) {
                var temp = this.score.score;
                if (temp > parseInt(localStorage.getItem('highScore')!))
                    localStorage.setItem('highScore', temp.toString());
                    this.bird.isDead = true;
            }        
        });
    }   
}