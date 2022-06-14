import Phaser from 'phaser'
import { Base } from '~/Objects/Base';
import { Bird } from '~/Objects/Bird';

export default class GamePlaying extends Phaser.Scene {
    bird: Bird;
    base: Base;
    player: any;
    cursors: any;
    pipeUnder: any;
	constructor()
	{
        super('flappy bird')
        this.bird = new Bird(0, 0, '', false, this, []);
        this.base = new Base(0, 0, '', this.bird, this);
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
    }
    init() {
        this.bird = new Bird(40, 40, 'birdUp', false, this, ['birdUp', 'birdMid', 'birdDown']);
        this.base = new Base(140, 460, 'base', this.bird, this);
    }
    create () {
        this.cursors = this.input.keyboard.createCursorKeys();
        this.add.image(136, 256, 'background');   
        this.bird.create();
        this.base.create();

    }
    update(time: number, delta: number): void {
        this.bird.update();
        if (this.cursors.up.isDown) {
            this.bird.player.setVelocityY(-200);
            this.bird.player.angle = -45;
        }     
    }
}    