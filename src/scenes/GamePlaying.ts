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

	preload()
    {
        this.load.path = "Bird/";
        this.load.image('birdUp', "redbird-upflap.png");
        this.load.image('birdMid', "redbird-midflap.png");
        this.load.image('birdDown', "redbird-downflap.png");
        this.load.path = "BackGround/";
        this.load.image('background', "bg.png");
        this.load.image('base', 'base.png');
        this.load.path = "Pipe/";
        this.load.image('pipeOn', 'pipeOn.png');
        this.load.image('pipeUnder', 'pipeUnder.png');
        this.load.path = "Number/";
        this.load.image('0', '0.png');
        this.load.image('1', '1.png');
        this.load.image('2', '2.png');
        this.load.image('3', '3.png');
        this.load.image('4', '4.png');
        this.load.image('5', '5.png');
        this.load.image('6', '6.png');
        this.load.image('7', '7.png');
        this.load.image('8', '8.png');
        this.load.image('9', '9.png');
        this.load.path = "Advance/";
        this.load.image('star', 'star.png');
        this.load.image('fire', 'fire.png');
    }
    init() {
        this.score = new Score(135, 100, -1, ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], this);
        this.bullet = new Score(20, 30, 0, ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], this);
        this.bird = new Bird(40, 40, 'birdUp', false, this, ['birdUp', 'birdMid', 'birdDown']);
        this.base = new Base(140, 460, 'base', this.bird, this);
        this.pipe = new Pipe(300, 800, 'pipeUnder', this.bird, this, this.score);
        this.pipeOn = new PipeOn(619, -100, 'pipeOn', this.bird, this, this.pipe);
        this.star = new Star(200, 300, 'star', this.bird, this.pipe, this.base, this, this.bullet);
        this.fire = new Fire('fire', this.bird, this);
        this.enemy = new Enemy(400, 300, ['birdUp', 'birdMid', 'birdDown'], this.bird, this.fire, this.score, this);
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
        this.star.create();
        //this.fire.create();
        var timedEvent = this.time.addEvent({ delay: 100, callback: () => {
            if (this.cursors.right.isDown && this.bullet.score >= 1) {
                this.fire.create();
                this.bullet.score--;
                this.bullet.create();
            }
        }, callbackScope: this, loop: true });

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