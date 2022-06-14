import Phaser from 'phaser'
import { Bird } from '~/Objects/Bird';

export default class GamePlaying extends Phaser.Scene {
    bird: Bird;
    player: any;
    cursors: any;
    pipeUnder: any;
	constructor()
	{
        super('flappy bird')
        this.bird = new Bird(0, 0, '', false, this, []);
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
    }
    create () {
        this.cursors = this.input.keyboard.createCursorKeys();   
        this.player = this.bird.create();
    }
    update(time: number, delta: number): void {
        if (this.cursors.up.isDown)
             this.player.setVelocityY(-200);

    }
}    