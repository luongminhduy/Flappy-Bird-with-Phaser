import { Bird } from "./Bird";
import { Score } from "./Score";

export class Pipe {
    score: Score;
    x: number;
    y: number;
    img: string;
    bird: Bird;
    scene: Phaser.Scene;
    obtascle: any = 0;
    frame: number = 0;
    constructor(x: number, y: number, img: string, bird: Bird, scene: Phaser.Scene, score: Score) {
        this.x = x;
        this.y = y;
        this.img = img;
        this.bird = bird;
        this.scene = scene;
        this.score = score;
    }
    create() {
        var temp: boolean = false;
        this.obtascle = this.scene.physics.add.sprite(this.x, this.y, this.img);
        this.obtascle.setImmovable(true);
        this.obtascle.body.allowGravity = false;
        this.obtascle.setVelocityX(-80);
        this.scene.physics.add.collider(this.bird.player, this.obtascle, (_player, _obtascle) => {
            if (_player.body.touching) {
                    this.bird.isDead = true;
            }        
        });
    }
    update() {
        if (this.obtascle.x < - 20) {
                this.obtascle.x = 300;
                this.obtascle.y = Phaser.Math.Between(240, 500);
                this.score.score++;
                this.score.create();
        }
    }
}