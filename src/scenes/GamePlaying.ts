import Phaser from 'phaser'
import { Base } from '~/Objects/Base';
import { Bird } from '~/Objects/Bird';
import { Enemy } from '~/Objects/Enemy';
import { Fire } from '~/Objects/Fire';
import { Pipe } from '~/Objects/Pipe';
import { PipeOn } from '~/Objects/PipeOn';
import { Score } from '~/Objects/Score';
import { Star } from '~/Objects/Star';
export default class GamePlaying extends Phaser.Scene {
    enemy: Enemy;
    bullet: Score;
    fire: Fire;
    star: Star;
    score: Score;
    bird: Bird;
    base: Base;
    pipe: Pipe;
    pipeOn: PipeOn;
    player: any;
    cursors: any;
	constructor()
	{
        super('GamePlaying')
        this.score = new Score(0, 0, 0, [], this);
        this.bullet = new Score(0, 0, 0, [], this);
        this.bird = new Bird(0, 0, '', false, this, []);
        this.base = new Base(0, 0, '', this.bird, this);
        this.pipe = new Pipe(300, 500, '', this.bird, this, this.score);
        this.pipeOn = new PipeOn(619, -100 ,'', this.bird, this, this.pipe);
        this.star = new Star(0, 0, '', this.bird, this.pipe, this.base, this, this.bullet);
        this.fire = new Fire('', this.bird, this);
        this.enemy = new Enemy(0, 0, [], this.bird, this.fire, this.score, this);     
	}
    init() {
        this.score = new Score(135, 100, -1, ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], this);
        this.bullet = new Score(20, 30, 0, ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], this);
        this.bullet.scale = 0.6;
        this.bird = new Bird(40, 40, 'birdUp', false, this, ['birdUp', 'birdMid', 'birdDown']);
        this.base = new Base(140, 460, 'base', this.bird, this);
        this.pipe = new Pipe(300, 800, 'pipeUnder', this.bird, this, this.score);
        this.pipeOn = new PipeOn(619, -100, 'pipeOn', this.bird, this, this.pipe);
        this.star = new Star(200, 300, 'star', this.bird, this.pipe, this.base, this, this.bullet);
        this.fire = new Fire('fire', this.bird, this);
        this.enemy = new Enemy(300, 300, ['enemy1', 'enemy2', 'enemy3'], this.bird, this.fire, this.score, this);
    }
    create () {
        this.cursors = this.input.keyboard.createCursorKeys();
        this.add.image(136, 256, 'background');   
        this.bird.create();
        this.pipeOn.create();
        this.pipe.create();
        this.base.create();
        this.score.create();
        this.bullet.create();
        this.bullet.scale = 0.6;
        this.star.create();
        //this.fire.create();
        this.input.keyboard.on('keydown-X', () => {
            if (this.bullet.score >= 1) {
                this.fire.create();
                this.bullet.score--;
                this.bullet.create();
            }
        }, this);

        var enemyEvent = this.time.addEvent({ delay: 3000, callback: () => {
            this.enemy.create();
        }, callbackScope: this, loop: true });
    }
    update(time: number, delta: number): void {
        this.bird.update();
        this.pipe.update();
        this.pipeOn.update();
        this.star.update();
        this.fire.update();
        if (this.cursors.up.isDown) {
            this.bird.player.setVelocityY(-200);
            this.bird.player.angle = -45;
        }
    }
}    